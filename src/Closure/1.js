//global scope
var name = 'john';

const outer = () => {
    //local scope
    console.log(name);
}
outer();
