// Require modules
require('dotenv').config()
const path = require('path');
const express = require('express');
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");


// Require the db connection, models, and seed data
const db = require('./models');


// Require the routes in the controllers folder
const productsCtrl = require('./controllers/products')


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
// Body parser: used for POST/PUT/PATCH routes: 
// this will take incoming strings from the body that are URL encoded and parse them 
// into an object that can be accessed in the request parameter as a property called body (req.body).
app.use(express.urlencoded({ extended: true }));
// Allows us to interpret POST requests from the browser as another request type: DELETE, PUT, etc.
app.use(methodOverride('_method'));




// ROUTES
app.get('/', function (req, res) {
    db.Product.find({ isFeatured: true })
    .then(products => {
        res.render('home', {
            products: products
        })
    })
});

// When a GET request is send to '/seed', the products collection is seeded in the database
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

// Render the about page
app.get('/about', function (req, res) {
    res.render('about')
});

// This tells our app to look at the `controllers/products.js` file
// to handle all routes that begin with `localhost:3000/products`
app.use('/products', productsCtrl)


// Catch all route for anything that doesn't match above routes
app.get('*', function (req, res) {
    res.render('404')
})


// Tell the app to listen on the specified port
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
});