//array
var arrName = [1000, "mobile", true];
var arrName2 = new Array(10, 20, 30);

console.log(arrName);
console.log(arrName[1]);

console.log(arrName2);
console.log(arrName2[0]);

//array methods
/*
join
slice
filter
find
map
*/

let currency = [1, 25, 69, 77, 88, 99, 101];

console.log(currency.join("-->"));
console.log("slice");
console.log(currency.slice(1, 4));

console.log(currency.filter((value) => {
    return value > 69;
}));
console.log(currency.find((value) => {
    return value < 69;
}));
console.log(currency.map((values) => {
    return `\n ${values}`;
}));

//iterators
for(var property in currency){
    console.log(`${property} - ${currency[property]}`);
}

for(var values of currency){
    console.log(values);
}