import { applyMiddleware, combineReducers, createStore } from '../../web_modules/redux.js';
import { todoReducer } from '../modules/to_do/store/todo.store.js';
import createSagaMiddleware from '../../web_modules/redux-saga.js';
import { rootSagas } from './app.sagas.js';
// Converts our Class Actions into plain Javascript objects, redux doesn't like non POJO actions
// @ts-ignore
export const actionConverterMiddleware = store => next => action => {
  next({ ...action
  });
};
export const rootReducer = combineReducers({
  todo: todoReducer
});

function initStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [actionConverterMiddleware, sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const store = createStore(rootReducer, middlewareEnhancer);
  sagaMiddleware.run(rootSagas);
  return store;
}

export const store = initStore();