import { Product } from "../models/admin.model.js";

const getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'add-product',
        path: '/add-product'
    })
}

const postAddProduct = (req, res, next) => {
    
    const {title, imageUrl, price, description} = req.body;
    const product = new Product();
    const product1 = {title, imageUrl, price, description}
    product.save(product1);
    res.status(200).json('Se guardo con exito')
}

export { postAddProduct, getAddProduct};