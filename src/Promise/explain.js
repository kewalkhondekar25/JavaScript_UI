new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("1 sec");
        let error = true;
        if(!error)
        {
            resolve({name: "sai", age: 24});
        }else
        {
            reject("ERROR")
        }
    }, 1000);
})
.then((user) => {
    console.log(user.name);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("something happen sucessfully");
})


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("task ");
        let error = true;
        if(error){
            resolve({name: "sai"})
        }else
        {
            reject("ERROR")
        }
    }, 1000);
})

//try catch
const func = async () => {
    try {
        const res = await promise;
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

func();
