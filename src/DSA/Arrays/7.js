//inbuilt loop

//map

let arr = [1, 2, 3, 4, 5];
console.log(arr);

arr.map((item, index, array) => console.log(item, index, array));

let newArr = arr.map(item => item * 69);
console.log(newArr);
