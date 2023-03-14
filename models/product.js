// Creates the Product model

// Require the Mongoose package
const mongoose = require('mongoose');

// Schema to define the properties of the products collection
const productSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        maxlength: 350,
        required: true 
    },
    city: { 
        type: String, 
        required: true 
    },
    state: { 
        type: String
    },
    country: { 
        type: String, 
        required: true 
    },
    category: { 
        type: String, 
        enum: ['Yachts', 'Private Jets', 'Luxury Cars', 'Private Islands', 'Residences'],
        required: true 
    },
    photo: { 
        type: String, 
        required: true },
    condition: { 
        type: String, 
        enum: ['New', 'Excellent', 'Good'],
        required: true 
    },
    askingPrice: { 
        type: String, 
        required: true 
    },
    quantity: { 
        type: Number, 
        required: true 
    },
    isFeatured: { 
        type: Boolean 
    },
    dateListed: { 
        type: Date, 
        default: Date.now 
    }
})


// Schema exported as a Monogoose model
// The Mongoose model will be accessed in `models/index.js`
module.exports = mongoose.model('Product', productSchema);