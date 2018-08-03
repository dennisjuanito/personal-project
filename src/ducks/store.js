import { createStore, combineReducers, applyMiddleware } from "redux";
import  promiseMiddleware  from "redux-promise-middleware";
import  checkSessionReducer  from "./reducers/checkSessionReducer.js";

const rootReducers = combineReducers({
  checkSessionReducer
});

const store = createStore(rootReducers, applyMiddleware(promiseMiddleware()));

export default store;
