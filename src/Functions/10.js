//function closure

function outer(){
    let msg = "msg from outer";
    function inner(){
        let outerMsg = msg;
        let innerMsg = "msg from inside";
        return outerMsg + " " + innerMsg;
    }
    return inner();
}

console.log(outer());