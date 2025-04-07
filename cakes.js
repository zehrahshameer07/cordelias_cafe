const express = require('express');
const app = express();

// Sample Cake Inventory
const cakes = [
    { name: "Red Velvet", price: "₹2000", stock: 10 },
    { name: "Chocolate Truffle", price: "₹2500", stock: 5 },
    { name: "Lemon Drizzle", price: "₹1800", stock: 15 },
    { name: "Vanilla Buttercream", price: "₹1500", stock: 8 },
    { name: "Black Forest", price: "₹2200", stock: 12 },
    { name: "Strawberry Cheesecake", price: "₹2700", stock: 6 },
    { name: "Mango Delight", price: "₹2300", stock: 9 },
    { name: "Pineapple Upside-Down Cake", price: "₹2000", stock: 7 }
];

// API route to fetch inventory
app.get('/cakes', (req, res) => {
    res.json(cakes);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
