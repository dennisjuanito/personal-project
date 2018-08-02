import { Switch, Route } from "react-router-dom";
import GetStarted from "./components/GetStarted/GetStarted.js";
import Home from "./components/Home/Home.js";
import Register from "./components/Register/Register.js";
import React from 'react';

export default (
  <Switch>
    <Route exact path="/" component={GetStarted} />
    <Route component={Register} path="/register"  />
    <Route component={Home} path="/home" />
  </Switch>
);

{
  /* <Route component={}/>
<Route exact component={GetStarted}/> */
}
