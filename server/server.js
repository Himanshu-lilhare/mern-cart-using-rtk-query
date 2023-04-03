import express from "express";
import dotenv from "dotenv"
import { connectDb } from "./db.js";
import cors from 'cors'
import productRouter from "./routes/product.js";
const app=express()
dotenv.config({path:'./.env'})
app.use([cors(),express.json(),express.urlencoded({extended:true})])


connectDb()


app.get('/',(req,res)=>{
    res.send('hie bro kya bolte hai')
})
console.log('aaya')
app.listen(4000,()=>{
    console.log('server is running at port 4000')
})
app.use('',productRouter)