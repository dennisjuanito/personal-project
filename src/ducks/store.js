import { createStore, combineReducers, applyMiddleware } from "redux";
import  promiseMiddleware  from "redux-promise-middleware";
import  checkSessionReducer  from "./reducers/checkSessionReducer.js";
import {reducer as toastrReducer} from 'react-redux-toastr'


const rootReducers = combineReducers({
  checkSessionReducer,
  toastr: toastrReducer
});

const store = createStore(rootReducers, applyMiddleware(promiseMiddleware()));

export default store;
