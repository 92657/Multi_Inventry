import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(
    process.env.Url
  )
  .then(() => {
    console.log(' MongoDB Connected')
  })
  .catch((err) => {
    console.log('MongoDB Connection Error:', err)
  })