//reduce

let price = [1, 2, 3, 4];

let initialValue = 0;
let totalPrice = price.reduce((accum, currVal) => {
    console.log(`acc: ${accum}; currVal: ${currVal}`);
    return accum + currVal;
}, initialValue);

console.log(totalPrice);