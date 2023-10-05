import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import apiRoutes from "./routes/api/api.js"
import connectToDataBase from "./config/db.js";
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json());
app.use("/api",apiRoutes);
const port = process.env.PORT || 9000;
dotenv.config();
connectToDataBase();


app.get("/", (require, response)=>{
    response.send("Bienvenido a mi API")
});


app.listen(port, ()=>{
    console.log("El servidor esta escuchando desde ", port)
});