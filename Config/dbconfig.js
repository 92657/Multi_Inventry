import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = () => {

    mongoose.connect(process.env.Url)

    .then(() => {
        console.log("MongoDB Connected");
    })

    .catch((err) => {
        console.log("MongoDB Connection Error:", err);
    });

};

export default connectDB