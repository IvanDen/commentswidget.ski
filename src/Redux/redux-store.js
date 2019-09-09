import {combineReducers, createStore} from "redux";
import commentsReducer from "./comment-reducer";

let reducers = combineReducers ({
    commentsPage: commentsReducer,
});

let store = createStore(reducers);
window.store = store;
export default store;
