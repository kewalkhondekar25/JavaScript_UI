//spread operators

let arr1 = [1, 2, 3];
let arr2 = [69, 70, 71];

let finalArr = [...arr1, ...arr2];
console.log(finalArr);

//rest operator
const sum = (...nums) => {  //rest operators/ rest param
    return nums
}
console.log(sum(arr1, arr2, 'hi'));