const getFunc = () => {
    var name = 'mozilla';
    const displayName = () => {
        console.log(name);
    }
    return displayName;
}

//getFunc()();
let callFunc = getFunc();
callFunc();