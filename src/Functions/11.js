//anonymous function

let arr = [1, "arjun", function(){console.log("func in arr")}];

arr[2]();

//iife
(function(){
    console.log("JavaScript IIFE Function");
})();