//rest parameters
function loginUser(...loginDetails){
    const [userName, password, success, failure] = loginDetails;
    if(userName == "arjun" && password == "arjun11")
    {
        success();
    }else{
        failure();
    }
};

loginUser("arjun", "arjun11", function(){console.log("login success")}, function(){console.log("invalid credentials")});