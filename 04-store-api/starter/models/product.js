const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, 'product must have provided']
    },
    price:{
        type: Number,
        required:[true, 'product price must be provided']
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 4.5,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company:{
        type: String,
        enum: {
            values: ['ikea', 'lidy', 'carresa', 'marcos'],
            message: '{VALUE} is not supported'
        }
        // enum:['ikea', 'lidy', 'carresa', 'marcos']
    }
})

module.exports = mongoose.model('Product', productSchema)