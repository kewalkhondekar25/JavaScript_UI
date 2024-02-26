//map
let arr = [1, 2, 3, 4, 5];

let result1 = arr.map((item) => {
    return item * 3;
}) 

let result2 = arr.map((item, index) => {
    return index;
}) 

console.log(result1);
console.log(result2);