import { Router } from "express";
import { product } from "../controllers/product.controller.js";

const router = Router();

router
    .route('/:productId')
    .get(product)

export default router;