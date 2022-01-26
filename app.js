import express from 'express';

import shopRoutes from './routes/shop.routes.js';
import adminRoutes from './routes/admin.routes.js';
import productRoutes from './routes/product.routes.js';

//aplicacion app con express
const app = express()
const PORT = process.env.PORT || 3000;

//vistas con template engine ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

//para recibir lo que viene en el request, en el body
app.use(express.urlencoded({ extended: true }));

//llamado de rutas
app.use(shopRoutes);
app.use(adminRoutes);
app.use(productRoutes);

app.use((req,res,next) => {
    res.status(404).send("<h1>Page not found<h1>");
})

//puerto en el que esta corriendo
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));