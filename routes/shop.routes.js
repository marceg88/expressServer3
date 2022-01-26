import { Router } from "express";
import { getHome } from "../controllers/shop.controller.js";

const router = Router()

router
    .route('/')
    .get(getHome);

export default router;