//for loop

const arr = [1, 2, 3, 4, 5];
//index       0 1  2  3  4


//i = 3         3  <     5       3
for( let i = 0; i < arr.length; i++){
    //              3
    console.log(arr[i]);
}
//1
//2
//3
//4
for(var item of arr){
    console.log(`for of: ${item}`);
}
arr.forEach( item => console.log(item))