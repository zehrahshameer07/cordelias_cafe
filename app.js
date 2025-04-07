const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: 'Zehrah@123', 
    database: 'cordelia_cafe'
});

db.connect(err => {
    if (err) {
        console.error('[ERROR] MySQL Connection Failed:', err);
        return;
    }
    console.log('[SUCCESS] Connected to MySQL Database');
});

//  ADD Order
app.post('/addOrder', (req, res) => {
    const { customer_name, cake_name, quantity, price } = req.body;
    const sql = "INSERT INTO orders (customer_name, cake_name, quantity, price) VALUES (?, ?, ?, ?)";
    db.query(sql, [customer_name, cake_name, quantity, price], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'Order Added Successfully', orderId: result.insertId });
    });
});

//  EDIT Order
app.put('/editOrder/:id', (req, res) => {
    const { customer_name, cake_name, quantity, price } = req.body;
    const sql = "UPDATE orders SET customer_name=?, cake_name=?, quantity=?, price=? WHERE order_id=?";
    db.query(sql, [customer_name, cake_name, quantity, price, req.params.id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'Order Updated Successfully' });
    });
});

//  DELETE Order
app.delete('/deleteOrder/:id', (req, res) => {
    const sql = "DELETE FROM orders WHERE order_id=?";
    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'Order Deleted Successfully' });
    });
});

// SEARCH Order
app.get('/searchOrder/:id', (req, res) => {
    const sql = "SELECT * FROM orders WHERE order_id=?";
    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send(result.length ? result[0] : { message: 'Order Not Found' });
    });
});

//  DISPLAY All Orders
app.get('/orders', (req, res) => {
    const sql = "SELECT * FROM orders";
    db.query(sql, (err, result) => {
        if (err) return res.status(500).send(err);
        res.send(result);
    });
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`[SERVER] Running on http://localhost:${PORT}`);
});
