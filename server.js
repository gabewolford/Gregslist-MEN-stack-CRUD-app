// Require modules
require('dotenv').config()
const path = require('path');
const express = require('express');
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");


// Require the db connection, models, and seed data
const db = require('./models');


// Create the Express app
const app = express();


// Config the app to refresh the browser when nodemon restarts
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
    // wait for nodemon to fully restart before refreshing the page
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});


// Config the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Middleware (app.use)
app.use(express.static('public'))
app.use(connectLiveReload());


// Mount routes
// _________________________________________________
app.get('/', function (req, res) {
    res.send('Gregslist')
});

// When a GET requets is send to '/seed', the products collection is seeded in the database
app.get('/seed', function (req, res) {
    // Remove any exisisting products
    db.Product.deleteMany({})
        .then(removedProducts => {
            console.log(`Removed ${removedProducts.deletedCount} products`)
            // Seed the products collection with the seed data
            db.Product.insertMany(db.seedProducts)
                .then(addedProducts => {
                    console.log(`Added ${addedProducts.length} products to be sold`)
                    res.json(addedProducts)
                })
        })
});


// Tell the app to listen on the specified port
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
});