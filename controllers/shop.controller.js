import { Product } from "../models/admin.model.js";

const getHome = (req, res, next) => {
    const products = Product.fetchAll()
    console.log('products', products)
    res.status(200).json({message: 'Se carga la lista', products})
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
    });
}

export {getHome};