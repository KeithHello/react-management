import { legacy_createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import handlereArr from "./ArrState/reducer";
import handlerNum from "./NumState/reducer";
import handlerXxxx from "./XxxxState/reducer";

// combine reducer
const reducers = combineReducers({
    handlereArr,
    handlerNum,
    handlerXxxx,
});


// enable redux devtools
let composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// combine reducer, redux-dev-tools(browser) and redux-thunk
const store = legacy_createStore(reducers, 
    composeEnhancers(applyMiddleware(thunk)));

export default store;