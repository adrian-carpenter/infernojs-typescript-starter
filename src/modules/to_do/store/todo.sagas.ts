import { put, takeLatest } from 'redux-saga/effects'
import {
  FavoriteTodoFailed,
  FavoriteTodoSuccess,
  TODO_ACTIONS,
  TodoActionTypeUnion,
} from './todo.store'

function* favoriteTodo(action: TodoActionTypeUnion) {
  try {
    // Api goes here, let's just fail on 10% of calls
    const chance = Math.floor(Math.random() * 100)
    // Simulate slow async call
    setTimeout(() => {
      if (chance < 10) {
        throw new Error('Todo ')
      }
    }, 2000)
    // This api should return the update object from the DB, but we're doing in the store
    yield put(new FavoriteTodoSuccess(+action.payload))
  } catch (e) {
    yield put(new FavoriteTodoFailed(+action.payload))
  }
}

export function* todoSaga() {
  yield takeLatest(TODO_ACTIONS.FAVORITE_TODO_REQUEST, favoriteTodo)
}
