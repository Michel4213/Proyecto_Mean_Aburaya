import express from "express";
import productSchema from "../../models/productos.models.js"

const router = express.Router();

//Traer datos
router.get("", (req, res) => {
    productSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  router.post("", (req, res) => {
    const { tipo,diseno,color,precio,talla,cantidad } = req.body;
  
    // Crea una instancia del modelo Goals con los datos proporcionados
    const newProduct = new productSchema({
      tipo,
      diseno,
      color,
      precio,
      talla,
      cantidad,
    });
    // Guarda el nuevo registro en la base de datos
    newProduct
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

//Traer todos los usuarios
router.get("/products", (req, res) => {
    productSchema
       .find()
       .then((data) => res.json(data))
       .catch((err)=> res.json({ message: console.error(err + "Error")}));
});


//Listar un usuario
router.get("/products/:id", (require, response) => {
    const { id } = require.params;
    productSchema.findById(id)
    .then((data) => response.json(data))
    .catch((error) => response.json({ message: error}))
});


router.get('/products/:diseno', (request, response) => {
  const { diseno } = request.params;

  productSchema.findMany({ diseno })
    .then((data) => {
      if (data) {
        const disenoValue = data.diseno; // Assuming "samurai" is the key you want to retrieve
        response.json({ diseno: disenoValue });
      } else {
        response.status(404).json({ message: 'Product not found' });
      }
    })
    .catch((error) => response.status(500).json({ message: error }));
});

//Crear mi usuario
router.post("/products", (require, response) => {
    const product = productSchema(require.body);
    product
    .save()
    .then((data) => response.json(data))
    .catch((error)=> response.json({ message: error}));
});

//Crear arreglo de usuarios
router.post("/productsMany", (require, response) => {
    const productsData = require.body;
    productSchema.insertMany(productsData)
    .then((data) => response.json(data))
    .catch((error)=> response.json({ message: error}));
});

//Actualizar un usuario
router.put("/products/:id", (require, response) =>{
    const { id } = require.params;
    const { name, lastname, age} = require.body;
    productSchema.updateOne({ _id: id }, {$set:{name, lastname, age}})
    .then((data) => response.json(data))
    .catch((error) => response.json({ message: error}))
});

//Eliminar un campo
router.put("/products/:id", (require, response) =>{
    const { id } = require.params;
    const {diseño} = require.body;
    productSchema.updateOne({ _id: id }, {$unset:{diseño}})
    .then((data) => response.json(data))
    .catch((error) => response.json({ message: error}))
});

//Actualizar varios documentos
router.put("/products/:id,id", (require, response) =>{
    const {name, lastname, age} = require.body;
    productSchema.updateMany({ _id: id }, {$set:{name}})
    .then((data) => response.json(data))
    .catch((error) => response.json({ message: error}))
});

// //Eliminar varios campos de varios documentos
// router.put("/products/:id,id", (require, response) =>{
//     const { id } = require.params;
//     const {diseño} = require.body;
//     productSchema.updateMany({ _id: id }, {$unset:{diseño}})
//     .then((data) => response.json(data))
//     .catch((error) => response.json({ message: error}))
// });

//Eliminar un usuario
router.delete("/products/:id", (require, response) =>{
    const { id } = require.params;
    productSchema.deleteOne({ _id: id })
    .then((data) => response.json(data))
    .catch((error) => response.json({ message: error}))
});




export default router;