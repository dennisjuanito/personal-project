import React, { Component } from 'react';
import './App.css';
import routes from "./routes.js";
import {withRouter} from "react-router-dom";
import TopBar from './components/TopBar/TopBar';


class App extends Component {
 
  render() {
    
    return (
      <div className="App">
      <TopBar />
      {console.log(this.props)}
        {routes}
      </div>
    );
  }
}

export default App;
