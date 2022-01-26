import { Product } from "../models/admin.model.js";

const product = (req, res, next) => {

    const {productId} = req.params;
    const product = Product.findById(productId);
    console.log('product', product);
    res.status(200).json({message: 'producto encontrado', product});
    
}

export {product};