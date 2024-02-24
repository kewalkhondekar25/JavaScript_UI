//var vs let vs const

function print1(){
    
    var x = 10;

    if(x == 10){
        var y = 20;
    }

    console.log(`x: ${x}; y: ${y}`);
}
print1();

