const http = require('http');
const EventEmitter = require('events');

class CafeEventEmitter extends EventEmitter {}
const cafeEmitter = new CafeEventEmitter();

// One-Time Event Listener
cafeEmitter.once('dailySpecial', () => {
    console.log("[EVENT] One-Time Event Triggered: 'Daily Special Update'\n");
});

// Inspecting Event Listeners
cafeEmitter.on('inspectOrders', () => {
    console.log("[INFO] Inspecting Event Triggered");
    console.log("[INFO] Listeners for 'inspectOrders':", cafeEmitter.listeners('inspectOrders'), "\n");
});

// Menu Update Event
cafeEmitter.on('menuUpdate', () => {
    console.log("[EVENT] Menu Updated Successfully!");
});

cafeEmitter.on('menuUpdate', () => {
    console.log("[EVENT] Additional Listener for 'menuUpdate' Executed\n");
});

// New Listener Event
cafeEmitter.on('newListener', (event) => {
    console.log(`[INFO] New Listener Added: '${event}'`);
});

// Custom Event Emitter - Order System
cafeEmitter.on('newOrder', (orderId, cake, customer) => {
    console.log("[CUSTOM EVENT] New Order Placed!");
    console.log(`       Order Details: `);
    console.log(`       - Order ID: ${orderId}`);
    console.log(`       - Cake: ${cake}`);
    console.log(`       - Customer: ${customer} \n`);
});


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Cordelia\'s Café Event Listener Server is Running!\n');

    console.log("--------------------------------------------");
    console.log("       Cordelia’s Café Event System");
    console.log("--------------------------------------------\n");
    
    console.log("[INFO] Event Listeners for 'menuUpdate':", cafeEmitter.listeners('menuUpdate'));
    
    cafeEmitter.emit('dailySpecial');
    cafeEmitter.emit('inspectOrders');
    cafeEmitter.emit('menuUpdate');
    cafeEmitter.emit('newOrder', 101, 'Red Velvet', 'Shreya');
    cafeEmitter.emit('inspectOrders');
    cafeEmitter.emit('menuUpdate');
    cafeEmitter.emit('newOrder', 102, 'Chocolate Truffle', 'Riya');
    
    console.log("--------------------------------------------\n");
});

server.listen(3000, () => {
    console.log("[SERVER] Running on http://localhost:3000\n");
});
