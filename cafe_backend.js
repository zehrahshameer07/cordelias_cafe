const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Create MySQL connection
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",  // Replace with actual MySQL password
    database: "cordelias_cafe"
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error("Error connecting to the database: " + err.stack);
        return;
    }
    console.log("Connected to the database.");
});

// CRUD OPERATIONS

// 1. Add a new customer
app.post("/customers", (req, res) => {
    const { name, email, phone } = req.body;
    connection.query(
        "INSERT INTO Customers (name, email, phone) VALUES (?, ?, ?)",
        [name, email, phone],
        (err, results) => {
            if (err) return res.status(500).send("Error adding customer: " + err);
            res.status(201).send("Customer added with ID: " + results.insertId);
        }
    );
});

// 2. Edit a customer
app.put("/customers/:id", (req, res) => {
    const { name, email, phone } = req.body;
    connection.query(
        "UPDATE Customers SET name = ?, email = ?, phone = ? WHERE customer_id = ?",
        [name, email, phone, req.params.id],
        (err, results) => {
            if (err) return res.status(500).send("Error updating customer: " + err);
            res.send("Customer updated.");
        }
    );
});

// 3. Delete a customer
app.delete("/customers/:id", (req, res) => {
    connection.query(
        "DELETE FROM Customers WHERE customer_id = ?",
        [req.params.id],
        (err, results) => {
            if (err) return res.status(500).send("Error deleting customer: " + err);
            res.send("Customer deleted.");
        }
    );
});

// 4. Search for a customer by name
app.get("/customers/search", (req, res) => {
    const { name } = req.query;
    connection.query(
        "SELECT * FROM Customers WHERE name LIKE ?",
        [`%${name}%`],
        (err, results) => {
            if (err) return res.status(500).send("Error searching for customer: " + err);
            res.json(results);
        }
    );
});

// 5. Display all customers
app.get("/customers", (req, res) => {
    connection.query("SELECT * FROM Customers", (err, results) => {
        if (err) return res.status(500).send("Error fetching customers: " + err);
        res.json(results);
    });
});

// 6. Add a new order
app.post("/orders", (req, res) => {
    const { customer_id, total_price } = req.body;
    connection.query(
        "INSERT INTO Orders (customer_id, total_price) VALUES (?, ?)",
        [customer_id, total_price],
        (err, results) => {
            if (err) return res.status(500).send("Error placing order: " + err);
            res.status(201).send("Order placed with ID: " + results.insertId);
        }
    );
});

// 7. Display all orders
app.get("/orders", (req, res) => {
    connection.query("SELECT * FROM Orders", (err, results) => {
        if (err) return res.status(500).send("Error fetching orders: " + err);
        res.json(results);
    });
});

// 8. Add a new menu item
app.post("/menu", (req, res) => {
    const { item_name, price, category_id } = req.body;
    connection.query(
        "INSERT INTO Menu (item_name, price, category_id) VALUES (?, ?, ?)",
        [item_name, price, category_id],
        (err, results) => {
            if (err) return res.status(500).send("Error adding menu item: " + err);
            res.status(201).send("Menu item added with ID: " + results.insertId);
        }
    );
});

// 9. Display all menu items
app.get("/menu", (req, res) => {
    connection.query("SELECT * FROM Menu", (err, results) => {
        if (err) return res.status(500).send("Error fetching menu: " + err);
        res.json(results);
    });
});

// 10. Submit a review
app.post("/reviews", (req, res) => {
    const { customer_id, menu_id, rating, comment } = req.body;
    connection.query(
        "INSERT INTO Reviews (customer_id, menu_id, rating, comment) VALUES (?, ?, ?, ?)",
        [customer_id, menu_id, rating, comment],
        (err, results) => {
            if (err) return res.status(500).send("Error submitting review: " + err);
            res.status(201).send("Review submitted with ID: " + results.insertId);
        }
    );
});

// Start the application
app.listen(port, () => {
    console.log(`Cafe Backend is running on http://localhost:${port}`);
});
