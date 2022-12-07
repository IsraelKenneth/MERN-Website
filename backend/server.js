import express from "express"
import connectDB from "./config/db.js"
import dotenv from "dotenv"
import productRoutes from "./routes/productRoutes.js"
import userRoutes from "./routes/userRoutes.js"


const app = express();

dotenv.config()

connectDB()
app.use(express.json())



app.get("/", (req, res) => {
    res.send("App running")
})

app.use("/api/products", productRoutes)

app.use("/api/users", userRoutes)


const PORT = process.env.PORT || 3001;


app.listen(PORT, console.log(`Server is running ${process.env.NODE_ENV} mode on Port ${PORT}`))



