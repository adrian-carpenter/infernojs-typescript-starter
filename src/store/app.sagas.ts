import { todoSaga } from '../modules/to_do/store/todo.sagas'
import { spawn } from 'redux-saga/effects'

export function* rootSagas() {
  yield spawn(todoSaga)
}
