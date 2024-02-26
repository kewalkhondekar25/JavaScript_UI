//reduce
let num = [1, 2, 3, 4];

let sum = num.reduce((acc, val) => {
    console.log(`acc: ${acc}; val: ${val}`);
    return acc + val;
}, 0);

console.log(sum);