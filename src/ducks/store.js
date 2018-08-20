import { createStore, combineReducers, applyMiddleware } from "redux";
import  promiseMiddleware  from "redux-promise-middleware";
import  checkSessionReducer  from "./reducers/checkSessionReducer.js";
import registerReducer from "./reducers/registerReducer.js";
// import makePostReducer from "./reducers/makePostReducer";
import imageUploaderReducer from "./reducers/imageUploaderReducer.js";
import homeReducer from "./reducers/homeReducer.js";
import {reducer as formReducer} from "redux-form";

import {reducer as toastrReducer} from 'react-redux-toastr';

const rootReducers = combineReducers({
  homeReducer,
  registerReducer,
  checkSessionReducer,
  imageUploaderReducer,
  toastr: toastrReducer,
  form: formReducer
});

const store = createStore(rootReducers, applyMiddleware(promiseMiddleware()),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
