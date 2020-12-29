import {
  applyMiddleware,
  combineReducers,
  createStore,
  Middleware,
} from 'redux'
import { TodoModel, todoReducer } from '../modules/to_do/store/todo.store'
import createSagaMiddleware from 'redux-saga'
import { rootSagas } from './app.sagas'

export type StoreModel = {
  todo: TodoModel
}
// Converts our Class Actions into plain Javascript objects, redux doesn't like non POJO actions
// @ts-ignore
export const actionConverterMiddleware: Middleware = (store) => (next) => (
  action,
) => {
  next({ ...action })
}

export const rootReducer = combineReducers({
  todo: todoReducer,
})

function initStore() {
  const sagaMiddleware = createSagaMiddleware()

  const middlewares = [actionConverterMiddleware, sagaMiddleware]

  const middlewareEnhancer = applyMiddleware(...middlewares)

  const store = createStore(rootReducer, middlewareEnhancer)

  sagaMiddleware.run(rootSagas)

  return store
}

export const store = initStore()
