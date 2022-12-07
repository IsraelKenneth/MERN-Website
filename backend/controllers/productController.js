import Product from "../models/productModel.js"
import asyncHandler from "express-async-handler"


// desc Fetch all products
// route Get all products
// access Public 
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.send(products)
})



// desc Fetch product
// route Get product 
// access Public 
const getProductbyID = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.send(product)
    } else {
        res.status(400).json({ message: `Product not found` })
    }
})

export { getProducts, getProductbyID }