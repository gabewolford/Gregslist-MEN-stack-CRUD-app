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



// Export routes so they are accessible is `server.js`
module.exports = router