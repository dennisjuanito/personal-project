import { createStore, combineReducers, applyMiddleware } from "redux";
import  promiseMiddleware  from "redux-promise-middleware";
import  checkSessionReducer  from "./reducers/checkSessionReducer.js";
import registerReducer from "./reducers/registerReducer.js";
import {reducer as toastrReducer} from 'react-redux-toastr'

const rootReducers = combineReducers({
  registerReducer,
  checkSessionReducer,
  toastr: toastrReducer
});

const store = createStore(rootReducers, applyMiddleware(promiseMiddleware()),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
