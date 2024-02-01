const collection = new Map();
collection.set("TV", "Sony Bravia");
collection.set(1,"Apple macbook");
collection.delete(1);
for(var key of collection.keys()){
    console.log(key);
}
for(var key of collection.values()){
    console.log(key);
}

console.log(collection.get("TV"));
console.log(collection.get(1));