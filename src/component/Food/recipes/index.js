import React, { Component } from 'react'; 
import api from '../../../services/foodAPI'

export default class RecipeContainer extends Component {
    state ={
        recipies: [],
        laoding: true
    }

    async componentDidMount() {
        const { query } = this.props.match.params;
        console.log('this.props.match.params: ', query);
        try {
            const recipies = await api.getRecipeByFood(query);
            console.log('got recipies: ', recipies); 
            this.setState({
                recipies,
                laoding: false
            });
        } catch (error) {
            console.log('error reciecved: ', error);
            this.setState({
                error: true,
                laoding: false
            });
        }
        
    }

    render() { 
        const { loading, recipies, error } = this.state; 
        const recipeList = recipies.map((recipie, index) => (
            <li key={index}>
                <h4>{recipie.title}</h4>
                <img src={`https://spoonacular.com/recipeImages/${recipie.id}-556x370.jpg`} alt="recipie"/>   
            </li>
        )); 
        if(loading) {
            return(
                <h1>Give me a sec im getting the recipies</h1>
            );
        } else if(error) {
            return(
                <h1>Something went wrong</h1>
            );
        } else { 
            return(
                <ul style={{ listStyleType: 'none'}}>
                    {recipeList}
                </ul>
            );
        }
    }
}