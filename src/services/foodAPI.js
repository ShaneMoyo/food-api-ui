export default { 
    async getRecipeByFood(food) {
        try {
            const response = await fetch(
                `https://api.spoonacular.com/recipes/search?query=${food}&number=2&apiKey=${process.env.REACT_APP_API_KEY}`
                
            ).then(res => res.json());
            console.log('response: ', response); 
            return response.results; 
        } catch(error) {
            console.log('error: ', error); 
        }
    }
}

