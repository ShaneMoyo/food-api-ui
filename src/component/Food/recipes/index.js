import React, { Component } from 'react'; 

export default class RecipeContainer extends Component {
    render() { 
        return(
            <h1> Recipies for: {this.props.match.params.query}</h1>
        );
    }
}