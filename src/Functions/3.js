//callback
function loginUser(userName, password, success, failure){
    if(userName == "arjun" && password == "arjun11")
    {
        success();
    }else{
        failure();
    }
};

loginUser("arjun11", "arjun11", function(){console.log("login success")}, function(){console.log("invalid credentials")});