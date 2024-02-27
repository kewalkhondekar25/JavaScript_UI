//promise handle using try-catch
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task is completed");
        let error = true;
        if(!error)
        {
            resolve({tech: "nodejs", category: "backend" });
        }else
        {
            reject("ERROR: something went wrong");
        }
    }, 1000);
})

const handlePromise = async () => {
    try {
        const res = await promise
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

handlePromise();