import mongoose from "mongoose"
import dotenv from "dotenv"
import Order from "./models/orderModel.js"
import Product from "./models/productModel.js"
import User from "./models/userModel.js"
import Users from "./data/users.js"
import Products from "./data/products.js"
import { MongoClient, ServerApiVersion } from 'mongodb';

const connectDB = async () => {

    try {
        const conn = mongoose.connect("mongodb+srv://odowgu:1puuIpIxn6Vp209t@cluster0.zk4edyr.mongodb.net/proshop", { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

        console.log(`MongoDb connected on: ${conn}`)
    } catch (error) {
        console.error(`Error${error.message}`)
        process.exit(1)
    }
}

export default connectDB

dotenv.config()
connectDB()

const importData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUser = await User.insertMany(Users)

        const isAdmin = createdUser[0]._id

        const createdSample = Products.map(product => {
            return { ...product, user: isAdmin }

        })

        await Product.insertMany(createdSample)

        console.log("Data created")
        process.exit()

    } catch (error) {
        console.error(`Error${error.message}`)
        process.exit(1)

    }
}

const destroyData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log("Data destroyed")
        process.exit()

    } catch (error) {
        console.error(`Error${error.message}`)
        process.exit(1)

    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}