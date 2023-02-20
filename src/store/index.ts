import { legacy_createStore, combineReducers } from "redux";
import handlereArr from "./ArrState/reducer";
import handlerNum from "./NumState/reducer";
import handlerXxxx from "./XxxxState/reducer";

// combine reducer
const reducer = combineReducers({
    handlereArr,
    handlerNum,
    handlerXxxx,
});


// enable redux devtools
const store = legacy_createStore(reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;