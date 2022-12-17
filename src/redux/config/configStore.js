import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";

// 1. create rootReducer with reducers
const rootReducer = combineReducers({
  todos,
});

// 2. create store
const store = createStore(rootReducer);

// 3. export
export default store;
