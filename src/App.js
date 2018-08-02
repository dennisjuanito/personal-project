import React, { Component } from 'react';
import './App.css';
import routes from "./routes.js";
import {withRouter} from "react-router-dom";
import Home from './components/Home/Home';

class App extends Component {
  componentDidMount() {
    console.log(this.props.history);
  }
  render() {
    
    return (
      <div className="App">
        {routes}
      </div>
    );
  }
}

export default withRouter(App);
