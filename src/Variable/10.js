function print(){
    let name = "arjun"
    // console.log(name);
    let x;
    x = 10;
    x = 69;
    console.log(x);

    if(true)
    {
        //illegal shadowing
        let name = "krishna";
        console.log(name);

    }
}

print();