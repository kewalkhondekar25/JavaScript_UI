fetch("https://vegan-meals-api.vercel.app/api/v1/meals")
.then((res) => {
    return res.json();
})
.then(data => console.log(data))
.catch(error => console.log(error));