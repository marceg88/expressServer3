import { Router } from "express";
import { getAddProduct, postAddProduct } from "../controllers/admin.controller.js";

const router = Router()

router
    .route('/add-product')
    .get(getAddProduct)
    .post(postAddProduct)

export default router;