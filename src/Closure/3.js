//closure

//global scope
const outer = () => {
    //inner scope 1
    var name = 'john';
    const inner = () => {   //closure
        //inner scope 2
        console.log(name);
    }
    inner();
}
outer();