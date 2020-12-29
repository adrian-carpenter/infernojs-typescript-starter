import { todoSaga } from '../modules/to_do/store/todo.sagas.js';
import { spawn } from '../../web_modules/redux-saga/effects.js';
export function* rootSagas() {
  yield spawn(todoSaga);
}