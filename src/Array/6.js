//map
let arr = [1, 2, 3, 4, 5];

let array = arr.map(item => item);
console.log(array);

//filter

let nums = [1, 2, 3, 4, 5]
let resultNum = nums.filter((item) => {
    return item > 2;
})
console.log(resultNum);

const obj = [
    {
        tech: "react",
        category: "frontend"
    },
    {
        tech: "angular",
        category: "frontend"
    },
    {
        tech: "springboot",
        category: "backend"
    },
    {
        tech: "php",
        category: "backend"
    }
]

const techResult = obj.filter((item) => {
    return item.category == "frontend"
})
console.log(techResult);