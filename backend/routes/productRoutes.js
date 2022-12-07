
import express from "express";
const router = express.Router()
import { getProductbyID, getProducts } from "../controllers/productController.js";

router.get("/", getProducts)



router.get("/:id", getProductbyID)

export default router