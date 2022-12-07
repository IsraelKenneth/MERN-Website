import Product from "../models/productModel.js"
import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"


// desc AUTH 
// route Post/api/users/login
// access Public 
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    res.send({
        email, password
    })
})

export { authUser }
