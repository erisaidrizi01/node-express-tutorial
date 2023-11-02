const Product = require('../models/product')

const getAllProductsStatic = (req, res) => {
    const products = Product
    // ({
    //     name: 'vase table'
    // })
    res.status(200).json({products, nbHits: products.length })
}

const getAllProducts = async (req, res) => {
    res.status(200).json({ msg: 'products route'})
}
module.exports = {
    getAllProductsStatic,
    getAllProducts
}
