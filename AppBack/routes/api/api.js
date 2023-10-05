import express from "express";
import usersRoutes from "./users.js";
import productRoutes from "./products.js"
import checkToken from "../../utils/middlewares.js";


const router = express.Router();

router.use("", usersRoutes);
router.use("", checkToken, productRoutes);


export default router;