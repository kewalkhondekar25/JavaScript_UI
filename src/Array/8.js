//map vs forEach
const arr = [1, 2, 3, 4, 5];

const mapRes = arr.map((item) => {
    return item * 2
})

const forEachRes = arr.forEach((item, index) => {
    return arr[index] = item * 2;
})

//console.log(mapRes);
console.log(forEachRes);