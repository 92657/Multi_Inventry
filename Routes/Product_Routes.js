import express from "express";
import { createProduct,getProducts,inventoryValuation,getSingleProduct,updateProduct,deleteProduct } from "../Controller/Product_Controller.js";


const router = express.Router();

router.post("/", createProduct);

router.get("/", getProducts);

router.get("/valuation", inventoryValuation);

router.get("/:id", getSingleProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;