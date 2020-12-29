import { combineReducers } from "../../web_modules/redux.js";
import { todoReducer } from "../modules/to_do/store/todo.store.js";
// Converts our Class Actions into plain Javascript objects, redux
// @ts-ignore
export const actionConverterMiddleware = store => next => action => {
  console.log(action);
  next({ ...action
  });
};
export const rootReducer = combineReducers({
  todo: todoReducer
});