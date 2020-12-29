import { TTodo } from '../todo.models'
import produce, { Draft } from 'immer'
import { Action, DataModel, dataModel } from '../../../store/app.store.model'

// Based of the older Ngrx Patterns version 5 & 6

// String Enum Constants
export enum TODO_ACTIONS {
  ADD_TODO = '[Todo Module] Add Todo',
  TOGGLE_TODO = '[Todo Module] Toggle Todo',
  REMOVE_TODO = '[Todo Module] Remove Todo',
  FAVORITE_TODO_REQUEST = '[Todo Module] Favorite Todo Request',
  FAVORITE_TODO_SUCCESS = '[Todo Sagas] Favorite Todo Success',
  FAVORITE_TODO_FAILED = '[Todo Sagas] Favorite Todo Failed',
}

// Create new classes for action
export class AddTodo implements Action<TODO_ACTIONS, string> {
  type = TODO_ACTIONS.ADD_TODO

  constructor(public payload: string) {}
}

export class ToggleTodo implements Action<TODO_ACTIONS, number> {
  type = TODO_ACTIONS.TOGGLE_TODO

  constructor(public payload: number) {}
}

export class RemoveTodo implements Action<TODO_ACTIONS, number> {
  type = TODO_ACTIONS.REMOVE_TODO

  constructor(public payload: number) {}
}

export class FavoriteTodoRequest implements Action<TODO_ACTIONS, number> {
  type = TODO_ACTIONS.FAVORITE_TODO_REQUEST

  constructor(public payload: number) {}
}

export class FavoriteTodoSuccess implements Action<TODO_ACTIONS, number> {
  type = TODO_ACTIONS.FAVORITE_TODO_SUCCESS

  constructor(public payload: number) {}
}

export class FavoriteTodoFailed implements Action<TODO_ACTIONS, number> {
  type = TODO_ACTIONS.FAVORITE_TODO_FAILED

  constructor(public payload: number) {}
}

// Create Union from Classes, note omit any non payload classes from this union type
export type TodoActionTypeUnion =
  | AddTodo
  | ToggleTodo
  | RemoveTodo
  | FavoriteTodoRequest
  | FavoriteTodoSuccess
  | FavoriteTodoFailed

// Initial State
export type TodoModel = {
  todos: DataModel<TTodo[]>
}

// Uses an init function to easy complex computation if needed
function init(): TodoModel {
  const sampleTodo: TTodo = {
    id: 1,
    description: 'Sample Todo #1',
    completed: false,
    favorite: false,
  }
  const sampleCompletedTodo: TTodo = {
    id: 2,
    description: 'Sample Todo #2',
    completed: true,
    favorite: false,
  }
  return {
    todos: dataModel([sampleTodo, sampleCompletedTodo]),
  }
}

// Uses Immer produce to reduce awkward spreading and clean up code readability
export const todoReducer = produce(
  (draft: Draft<TodoModel> = init(), action: TodoActionTypeUnion) => {
    switch (action.type) {
      case TODO_ACTIONS.ADD_TODO: {
        const newTodo: TTodo = {
          id: Math.floor(Math.random() * 1000), // Either DB or UUID library
          description: '' + action.payload,
          completed: false,
          favorite: false,
        }
        draft.todos.data.push(newTodo)
        return draft
      }
      case TODO_ACTIONS.TOGGLE_TODO: {
        const todos = draft.todos.data.map((t) => {
          if (t.id === action.payload) {
            t.completed = !t.completed
          }
          return t
        })
        draft.todos.setData(todos)
        return draft
      }
      case TODO_ACTIONS.REMOVE_TODO: {
        const todos = draft.todos.data.filter((t) => t.id !== action.payload)
        draft.todos.setData(todos)
        return draft
      }
      case TODO_ACTIONS.FAVORITE_TODO_SUCCESS: {
        const todos = draft.todos.data.map((t) => {
          if (t.id === action.payload) {
            t.favorite = !t.favorite
          }
          return t
        })
        draft.todos.setData(todos)
        return draft
      }
      case TODO_ACTIONS.FAVORITE_TODO_FAILED: {
        // Handle error
        return draft
      }
      default: {
        return draft
      }
    }
  },
)
