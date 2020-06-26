import React, { Component, createRef } from 'react'; 


export default class FoodContainer extends Component { 
    
    ref = createRef(); 
    handleSubmit = event => {
        event.preventDefault();
        console.log('input value: ', this.ref.current.value);  

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
            </div> 
        ); 
    }
}