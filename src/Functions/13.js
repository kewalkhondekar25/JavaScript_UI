//first class function

const square = (num) => {
    return num * num;
};

const print = (fn) => {
    return console.log(`result is: ${fn}`);
};

print(square(5));