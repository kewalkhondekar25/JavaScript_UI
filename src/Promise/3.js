const fetchMeals = async () => {
    try {
        const res = await fetch("https://vegan-meals-api.vercel.app/api/v1/meals");
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fetchMeals();