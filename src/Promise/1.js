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

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 3 completed");
        resolve({user: "arjun", email: "arjun@icloud.com"});
    }, 3000);
})
.then((user) => {
    console.log("promise 3 consumed");
    console.log(user);
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 4 completed");
        let error = true;
        if(error)
        {
            resolve({tech: "react", category: "UI"});
        }else
        {
            reject("ERROR: something went wrong");
        }
    }, 4000);
})
.then((user) => {
    return user.tech
})
.then((tech) => {
    console.log(`tech: ${tech}`);
})
.catch((error) => {
    console.log(error);
})