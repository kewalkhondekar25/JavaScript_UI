const promiseOne = new Promise((resolve, reject) => {
    //do async task
    setTimeout(() => {
        console.log("Async task is completed");
        resolve()
    }, 1000);
})

promiseOne.then(() => {
    console.log("promise one consumed");
})