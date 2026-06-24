import express from "express";
import dotenv from "dotenv";
import connectDB from "./Config/dbconfig.js";
import productRoutes from "./Routes/Product_Routes.js";
import storeMiddleware from "./MiddleWare/Store_Middleware.js";

dotenv.config();
const app = express();
app.use(express.json());
connectDB();
app.use(storeMiddleware);
app.use("/api/products", productRoutes);
app.listen(process.env.PORT, () => {
    console.log(
        `Server Running On Port ${process.env.PORT}`
    );

});