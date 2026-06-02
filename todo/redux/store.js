import { legacy_createStore as createStore, combineReducers } from "redux";
import inputTextReducer from "./reducers/inputTextReducer";
import tasksReducers from "./reducers/tasksReducers";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(
  combineReducers({ 
    text: inputTextReducer,
    tasks: tasksReducers,
  }),
  composeWithDevTools(),
);

export default store;
