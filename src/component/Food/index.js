import React, { Component, createRef } from 'react'; 
import { 
    Route, Switch
} from 'react-router-dom'; 

import Recipes from './recipes/index'; 
import Recipe from './recipes/recipe';
 
export default class FoodContainer extends Component { 
    
    ref = createRef(); 
    handleSubmit = event => {
        event.preventDefault();
        this.props.history.push(`/${this.ref.current.value}`); 
        this.ref.current.value = ''
    }

    render() { 
        return (
            <>
                <Switch> 
                    <Route path="/detail/:id" component={Recipe}/>
                      
                    <Route path="/">
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
                            <Route path="/:query" render={props => <Recipes {...props} key={props.match.params.query}/>}/>
                        </div> 
                    </Route>
                </Switch>
            </>
        ); 
    }
}