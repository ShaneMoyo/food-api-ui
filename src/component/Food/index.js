import React, { Component, createRef } from 'react'; 
import { 
    Route
} from 'react-router-dom'; 

import Recipes from './recipes/index'; 


export default class FoodContainer extends Component { 
    
    ref = createRef(); 
    handleSubmit = event => {
        event.preventDefault();
        this.props.history.push(`/${this.ref.current.value}`); 
        this.ref.current.value = ''
    }

    render() { 
        return (
            <div>
                <h1>Recipe Finder</h1>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <label>Find Recipe: </label>
                    <input 
                        ref={this.ref}
                        type="text"
                        placeholder="enter food here" 
                        /> 
                    <button type="submit">Search</button>
                </form>
                <Route path="/:query" render={(props) => <Recipes {...props} key={props.match.params.query}/>}/>
            </div> 
        ); 
    }
}