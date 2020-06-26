import React, { Component } from 'react'; 
import api from '../../../../services/foodAPI'; 
import Resource from '../../../utils/Resource'; 

export default class Recipe extends Component { 
    state ={ 

    }

    render() { 
        return (
           <Resource fetch={() => api.getRecipeSummaryByUrl(this.props.match.params.id)} render={
               ({ resource: recipe, loading, error }) => {
                   if(loading) {
                       return <h1>Hold on one sec... steh1ng that recipe</h1>
                   } else if (error) {
                    return <h1>Well, looks like that didnt work</h1>
                   } else { 
                       return (
                           <div>
                               <h1>{"pooop"}</h1>
                           </div>
                       )
                   }
               }
            }/> 
        );
    }
}