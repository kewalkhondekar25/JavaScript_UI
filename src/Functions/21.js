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

//callback example
const Login = (user, pwd, success, failure) => {
    if(user === 'john' && pwd === 'john123')
    {
        success();
    }else
    {
        failure();
    }
}
Login('john123', 'john123', () => console.log('success'), () => console.log('failure'));

// const Login = (...params) => {

//     const [user, pwd, success, failure] = params;
//     if(user === 'john' && pwd === 'john123')
//     {
//         success();
//     }else
//     {
//         failure();
//     }
// }
// Login('john', 'john123', () => console.log('success'), () => console.log('failure'));