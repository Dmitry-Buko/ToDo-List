import { legacy_createStore as createStore, combineReducers } from "redux";
import inputTextReducer from "./reducers/inputTextReducer";
import tasksReducer from "./reducers/tasksReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(
  combineReducers({ 
    text: inputTextReducer,
    tasks: tasksReducer,
  }),
  composeWithDevTools(),
);

export default store;
