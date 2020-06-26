export default { 
    async getRecipeByFood(food) {
        try {
            const response = await fetch(
                `https://api.spoonacular.com/recipes/search?query=${food}&number=15&apiKey=${process.env.REACT_APP_API_KEY}`
                
            ).then(res => res.json());
            console.log('response: ', response); 
            return response.results; 
        } catch(error) {
            console.log('error: ', error); 
        }
    }, 
    async getRecipeSummaryByUrl(url) {
        try {
            const response = await fetch(
                `https://api.spoonacular.com/recipes/716429/information&apiKey=${process.env.REACT_APP_API_KEY}`
                
            ).then(res => res.json());
            console.log('response: ', response); 
            return response.results; 
        } catch(error) {
            console.log('error: ', error); 
        }
    }
}

//https://api.spoonacular.com/recipes/extract?url=https://foodista.com/recipe/ZHK4KPB6/chocolate-crinkle-cookies
//https://api.spoonacular.com/recipes/{id}/ingredientWidget.json
//https://api.spoonacular.com/recipes/1003464/priceBreakdownWidget.json