function multiply(arr){
    let count = 1;
    for(i = 0; i < arr.length; i++)
    {   
        count *= arr[i];
        console.log(count);
    }
}

multiply([1, 2, 3, 4, 5])