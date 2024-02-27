const promiseOne = new Promise((resolve, reject) => {
    //do async task
    setTimeout(() => {
        console.log("Async task 1 is completed");
        resolve()
    }, 1000);
})
promiseOne.then(() => {
    console.log("promise one consumed");
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2 is completed");
        resolve();
    }, 2000);
})
.then(() => {
    console.log("promise 2 consumed");
})