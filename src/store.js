import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { todosReducer } from "./components/services/reducers/todosReducer";

export const store = createStore(todosReducer, applyMiddleware(thunk));
