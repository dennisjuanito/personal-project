import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import 'typeface-roboto'
import "./index.css";
import App from "./App";
import { unregister } from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import store from "./ducks/store.js";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import ReduxToastr from "react-redux-toastr";
import 'typeface-roboto';
import ScrollToTop from "./util-components/ScrollToTop.js";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <ReduxToastr
          timeOut={9000}
          newestOnTop={false}
          preventDuplicates
          position="top-left"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
        />
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
unregister();
