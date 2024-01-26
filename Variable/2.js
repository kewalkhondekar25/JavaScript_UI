    
    //function scope
    function f1(){
        var x = 10;
        if(x == 10)
        {
            var y = 20;
            var y = 69;//shadowing
            //hoisting
            console.log(x);
        }
        console.log("x: " + x + " y: " + y);
        console.log(`x: ${x} y: ${y}`);
    }
    f1();

    // function f2(){
    //     console.log(`value from f1: ${x}`);
    // }
    // f2();

    // console.log(`outside x: ${x}`);
