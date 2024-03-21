// callBack function

setTimeout(() => {
    console.log('timmer');
}, 2000);

function x(y){
    console.log('x');
    y();
};

x(function y(){
    //y is called callBack func
    console.log('y');
});