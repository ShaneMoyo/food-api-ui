import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Route, 
  Switch, 
  Link
} from 'react-router-dom'; 
import FoodContainer from './component/Food'; 

const About = () => (
  <section>
    <h1>Welcome to my food api wrapper thing</h1>
    <p>Find a recipe by searching a food</p>
  </section> 
)

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Switch>
          <Route path="/about" render={() => <About/>}/>
          <Route path="/" component={FoodContainer}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
