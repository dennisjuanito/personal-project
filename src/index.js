import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { unregister } from "./registerServiceWorker";
import { BrowserRouter, HashRouter } from "react-router-dom";
import store from "./ducks/store.js";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider >,
  document.getElementById("root")
);
unregister();
