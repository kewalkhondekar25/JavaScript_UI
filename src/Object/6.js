//AJAX asynchrous javascript and xml
/*
    fetch(url)
    .then(function(res){
        resturn res.json()
    })
    .then(function(data){
        data
    })
*/

// fetch("https://fakestoreapi.com/products")
// .then(function(res){
//     return res.json();
// })
// .then(function(data){
//     for(var items of data){
//         console.log(`this is 1st data: ${items.id}`);
//         console.log(`this is 1st data: ${items.title}`);
//         console.log(`this is 1st data: ${items.rating.rate}`);
//     }
// })

fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
.then(function(res){
    return res.json();
})
.then(function(data){
    for(var items of data){
        console.log(`this is 1st data: ${items}`)
    }
})