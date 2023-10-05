import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    {
        tipo:{
            type: String,
            require: true,
        },
        diseño:{
            type: String,
            require: true,
        },
        color:{
            type: String,
            require: true,
        },
        precio:{
            type: String,
            require: true,
        },  
        talla:{
            type: String,
            require: true,
        },
        cantidad:{
            type: Number,
            require: true
        }
});

export default mongoose.model("productos", productSchema)