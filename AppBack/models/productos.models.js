import mongoose from "mongoose";

const sizeSchema = new mongoose.Schema({
    talla: {
        type: String,
        require: true
    },
    cantidad: {
        type: Number,
        require: true
    },
}, { _id: false });

const productSchema = mongoose.Schema(
    {
        tipo: {
            type: String,
            require: true,
        },
        diseno: {
            type: String,
            require: true,
        },
        color: {
            type: String,
            require: true,
        },
        precio: {
            type: String,
            require: true,
        },
        tallas: [sizeSchema],
        img1: {
            type: String,
            require: true
        },
        img2: {
            type: String,
            require: true
        },
        routerlink: {
            type: String,
            require:true
        }
    });

export default mongoose.model("productos", productSchema)