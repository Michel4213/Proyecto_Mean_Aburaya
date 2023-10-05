import mongoose from "mongoose";

const cartSchema = mongoose.Schema(
    {
        usuario_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users"
        },
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
        }
});

export default mongoose.model("carritos", cartSchema)