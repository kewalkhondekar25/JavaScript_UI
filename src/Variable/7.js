//module scope

//global scope variable
var x = 25;

function f1(){
    console.log("this is f1");
    console.log("x in f1: " + x);

}
function f2(){
    console.log("this is f2");
    console.log("x in f2: " + x);

}

f1();
f2();