import express from "express";
import userSchema from "../../models/users.models.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

//Traer todos los usuarios
router.get("/users", (req, res) => {
    userSchema
       .find()
       .then((data) => res.json(data))
       .catch((err)=> res.json({ message: console.error(err + "Error")}));
});

//Listar un usuario
router.get("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}))
});

//Crear mi usuario
router.post("/users", (require, response) => {
    const user = userSchema(require.body);
    user
    .save()
    .then((data) => response.json(data))
    .catch((error)=> response.json({ message: error}));
});

//Eliminar un usuario
router.delete("/users/:id", (require, response) =>{
    const { id } = require.params;
    userSchema.deleteOne({ _id: id })
    .then((data) => response.json(data))
    .catch((error) => response.json({ message: error}))
});

//POST registro
router.post("/register", async (req, res)=>{
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 12);
        const userCreate = await userSchema.create(req.body);
        res.json(userCreate)
    }catch (error) {
        res.json({error: error.message})
    }
});

//POST login
router.post("/login", async (req,res)=>{
    const user = await userSchema.findOne({email: req.body.email});
    if(!user){
        return res.json({ error: "Error, revisa tu nombre de contraseña"})
    }
    const validar = bcrypt.compareSync(req.body.password, user.password)
    if(!validar){
        return res.json({ error: "Error, revisa tu nombre de contraseña"})
    }
    
        res.json({ success: 'Has ingresado con éxito', 
        token: createToken(userSchema) });
    });
    
    //TOKEN
    function createToken(userSchema) {
        const payload = {
            user_id: userSchema._id,
            user_role: userSchema.user_role
    
        }
        return jwt.sign(payload, 'Hola mundo mi primer token')
    
    }



export default router;

// //Crear arreglo de usuarios
// router.post("/usersMany", (require, response) => {
//     const usersData = require.body;
//     userSchema.insertMany(usersData)
//     .then((data) => response.json(data))
//     .catch((error)=> response.json({ message: error}));
// });

// //Actualizar un usuario
// router.put("/users/:id", (require, response) =>{
//     const { id } = require.params;
//     const { name, lastname, age} = require.body;
//     userSchema.updateOne({ _id: id }, {$set:{name, lastname, age}})
//     .then((data) => response.json(data))
//     .catch((error) => response.json({ message: error}))
// });

// //Eliminar un campo
// router.put("/users/:id", (require, response) =>{
//     const { id } = require.params;
//     const {name, lastname} = require.body;
//     userSchema.updateOne({ _id: id }, {$unset:{name,lastname}})
//     .then((data) => response.json(data))
//     .catch((error) => response.json({ message: error}))
// });

// //Actualizar varios documentos
// router.put("/users/:id,id", (require, response) =>{
//     const {name, lastname, age} = require.body;
//     userSchema.updateMany({ _id: id }, {$set:{name}})
//     .then((data) => response.json(data))
//     .catch((error) => response.json({ message: error}))
// });