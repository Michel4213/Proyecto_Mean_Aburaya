import mongoose from "mongoose";

const datosSchema = mongoose.Schema(
    {
        direccion:{type: String},
            telefono:{type:String},
    }
)

const userSchema = mongoose.Schema(
    {
        name:{
            type: String,
            require: true,
        },
        lastname:{
            type: String,
            require: true,
        },
        age:{
            type: Number,
            require: true,
        },  
        email:{
            type: String,
            require: true,
        },
        datosp:[
            datosSchema
        ],
        cargo:{
            type: String,
            require: false
        },
        password:{
            type: String,
            require:true
        },
        role:{
            type: String,
            default: "regular"
        }
    }
);


export default mongoose.model("usuarios", userSchema)