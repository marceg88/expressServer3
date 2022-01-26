const products = [
    { id: 1, title: 'Product1', imageUrl: 'https://i.pinimg.com/564x/5b/e1/91/5be1911c51b0877f5c9002f509768a94.jpg', description: "mueble", price: 30 },
    { id: 2, title: 'Product2', imageUrl: 'https://i.pinimg.com/564x/5b/e1/91/5be1911c51b0877f5c9002f509768a94.jpg', description: "comedor", price: 20 },
    { id: 3, title: 'Product3', imageUrl: 'https://i.pinimg.com/564x/5b/e1/91/5be1911c51b0877f5c9002f509768a94.jpg', description: "cocina", price: 10 },
]

export class Product {
    constructor(title, imageUrl, price, description){
        this.title = title;
        this.image = imageUrl;
        this.price = price;
        this.description = description;
    }

    save(product){
        const newProduct = {
            id: products[products.length-1].id + 1,
            title: product.title,
            imageUrl: product.imageUrl,
            price: product.price,
            description: product.description
        }
        products.push(newProduct);
    }

    static fetchAll(){
        return products;
    }

    static findById(productId){
        return products.filter(product => product.id == productId);
    }

}