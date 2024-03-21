//call Back

const square = (num) => {
    return num * num;
}

const display = (fn) => {
    console.log(fn(5));
}

display(square);