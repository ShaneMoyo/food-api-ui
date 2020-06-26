import React, { Component } from 'react'; 

export default class Resource extends Component {
    state ={
        resource: null,
        loading: true
    }

    async componentDidMount() {
        
        try {
            const resource = await this.props.fetch();
            console.log('got resource: ', resource); 
            this.setState({
                resource,
                loading: false
            });
        } catch (error) {
            console.log('error reciecved: ', error);
            this.setState({
                error: true,
                loading: false
            });
        }
        
    }

    render() { 
      return this.props.render(this.state); 
    }
}