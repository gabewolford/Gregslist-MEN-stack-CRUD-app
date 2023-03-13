/* 
---------------------------------------------------------------------------------------
NOTE: Remember that all routes on this page are prefixed with `localhost:3000/products`
---------------------------------------------------------------------------------------
*/


// Require modules
const express = require('express')
const router = express.Router()


// Require the db connection & models
const db = require('../models')


// ROUTES
// Index Route (GET/Read): Will display all products
router.get('/', function (req, res) {
    db.Product.find({})
        .then(products => {
            res.render('product-index', {
                products: products
            })
        })
})

// New Route (GET/Read): This route renders a form for user to
// fill out to POST (create) a new listing
router.get('/new', function (req, res) {
    res.send('You hit the new route! There will be a form here.')
})

// Create Route (POST/Create): This route receives the POST request sent from the new route,
// and creates a new product document using form data, and redirects the user
// to the new product's show page
router.post('/', function (req, res) {
    db.Product.create(req.body)
        .then(product => {
            res.json(product)
        })
})

// Show Route (GET/Read): Will display an individual product document
// using the URL parameter (document _id)
router.get('/:id', function (req, res) {
    db.Product.findById(req.params.id)
        .then(product => {
            res.render('product-details', {
                product: product
            })
        })
        .catch(() => res.send('404 Error: Page Not Found'))
})

// Edit Route (GET/Read): This route renders a form that the user will use
// to PUT (edit) properties of an exisiting product
router.get('/:id/edit', function (req, res) {
    db.Product.findById(req.params.id)
        .then(product => {
            res.send('This is where you will edit exisiting product ' + product._id)
        })
})


// Export routes so they are accessible is `server.js`
module.exports = router