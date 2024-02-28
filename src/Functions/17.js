//rest parameter VS spread operator

//rest param
const multiply = (...num) => {
    const [num1, num2] = num;
    return num1 * num2;
}

console.log(multiply(2, 5));

//spread operator
const add = (num1, num2) => {
    return num1 + num2;
}

const sum = [16, 9];
console.log(add(...sum));

// const print = (a, b, ...rest, c) => {
//     console.log(a, b);
// }

// print("apple", "banana", "chickoo")