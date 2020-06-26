import React, { Component } from 'react'; 
import api from '../../../services/foodAPI'
import Picture from '../../utils/Picture';
import Resource from '../../utils/Resource'; 

export default class RecipeContainer extends Component {
    
    render() { 
        return (
            <Resource fetch={() => api.getRecipeByFood(this.props.match.params.query)} render={
                ({ resource: recipies, loading, error }) => {      
                    console.log('props of resource: ', { resource: recipies, loading, error })
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
                                {recipies.map((recipie, index) => (
                                    <li key={index}>
                                        <h4>{recipie.title}</h4>
                                        <Picture url={`https://spoonacular.com/recipeImages/${recipie.id}-556x370.jpg`}/>   
                                    </li>
                                ))}
                            </ul>
                        );
                    }
                }
            }/> 
        )
    }
}
