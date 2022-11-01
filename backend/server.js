const express = require("express");
const products = require("./data/products.js")

const app = express();

app.get("/", (req, res) => {
    res.send("App running")
})

app.get("/api/products", (req, res) => {
    res.send(products)
})

app.get("/api/product/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.send(product)
})

const port = process.env.PORT || 3001;


app.listen(port, console.log("Server is running on Port 5000"))



