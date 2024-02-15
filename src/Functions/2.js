function printProducts(id, name, price, shipping, stock, rating){
    console.log(`
        product id: ${id},
        product name: ${name},
        product price: ${price},
        product shipping: ${shipping.toString()},
        product stock: ${stock ? "Available" : "out of stock"},
        product rating rate: ${rating.rate},
        product rating rate: ${rating.count},

    `);
};

printProducts(25, "iphone", ["pune", "nagpur"], 54000, true, {rate: 5, count: 99});