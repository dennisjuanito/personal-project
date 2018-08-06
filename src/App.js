import React, { Component } from 'react';
import './App.css';
import routes from "./routes.js";
import {withRouter} from "react-router-dom";
import Home from './components/Home/Home';

class App extends Component {
 
  render() {
    
    return (
      <div className="App">
      {console.log(this.props)}
        {routes}
      </div>
    );
  }
}

export default App;
