var names = ["kewal", "sainath", "kamal", "nilesh"];

names.map((value) => {
    return (console.log(`emp names: ${value}`));
})

//for in -- properties
//for of -- values

var cost = [101, 102, 103, 199];

for(var price of cost){
    (console.log(`for of: ${price}`));
}