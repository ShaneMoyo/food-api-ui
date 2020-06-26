export default { 
    async getRecipeByFood(food) {
        try {
            const response = await fetch(
                `https://api.spoonacular.com/recipes/search?query=${food}&number=2&apiKey=${process.env.REACT_APP_API_KEY}`
                
            ).then(res => res.json());
            console.log('response: ', response); 
            return response; 
        } catch(error) {
            console.log('error: ', error); 
        }
    }
}


// https://api.spoonacular.com/recipes/716429/information?apiKey=YOUR-API-KEY&includeNutrition=true.

// https://api.spoonacular.com/recipes/search?query=${food}&number=2&apiKey=${process.env.REACT_APP_API_KEY}

// ${process.env.REACT_APP_API_KEY}