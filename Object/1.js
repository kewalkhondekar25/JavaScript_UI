//object

let tv = {
    "name" : "sony bravia",
    "price" : 49999,
    "stock" : true,
    "cities" : ["pune", "nagpur"],
    "qty" : 2,
    "rating" : {"rate" : 5, "count" : 99},
    "total" : function(){
        return this.price * this.qty
    },
    "print" : function(){
        console.log(`name: ${this.name}; price: ${this.price}; stock: ${this.stock} cities: ${this.cities}; qty: ${this.qty}; rating: ${this.rating.rate}; rating count: ${this.rating.count}; total: ${this.total()}`);
    }
}

tv.print();