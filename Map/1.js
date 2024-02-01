const collection = new Map();
collection.set("TV", "Sony Bravia");
collection.set(1,"Apple macbook");
for(var key of collection.keys()){
    console.log(key);
}


console.log(collection.get("TV"));
console.log(collection.get(1));