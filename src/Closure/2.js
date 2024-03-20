//global scope

const outer = () => {
    //local scope
    var name = 'john';
}
console.log(name);
outer();
