const getTime = () => {
    let date = new Date();
    console.log(date.toLocaleTimeString());
}

//timer events
const clock = () => {
    setInterval(getTime, 1000);
}
clock();