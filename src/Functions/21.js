// callBack function

function x(y){
    console.log('x');
    y();
};

x(function y(){
    //y is called callBack func
    console.log('y');
});