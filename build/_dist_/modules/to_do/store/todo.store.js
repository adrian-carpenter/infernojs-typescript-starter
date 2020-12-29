import produce from '../../../../web_modules/immer.js';
import { dataModel } from '../../../store/app.store.model.js'; // Based of the older Ngrx Patterns version 5 & 6
// String Enum Constants

export let TODO_ACTIONS; // Create new classes for action

(function (TODO_ACTIONS) {
  TODO_ACTIONS["ADD_TODO"] = "[Todo Module] Add Todo";
  TODO_ACTIONS["TOGGLE_TODO"] = "[Todo Module] Toggle Todo";
  TODO_ACTIONS["REMOVE_TODO"] = "[Todo Module] Remove Todo";
  TODO_ACTIONS["FAVORITE_TODO_REQUEST"] = "[Todo Module] Favorite Todo Request";
  TODO_ACTIONS["FAVORITE_TODO_SUCCESS"] = "[Todo Sagas] Favorite Todo Success";
  TODO_ACTIONS["FAVORITE_TODO_FAILED"] = "[Todo Sagas] Favorite Todo Failed";
})(TODO_ACTIONS || (TODO_ACTIONS = {}));

export class AddTodo {
  constructor(payload) {
    this.payload = payload;
    this.type = TODO_ACTIONS.ADD_TODO;
  }

}
export class ToggleTodo {
  constructor(payload) {
    this.payload = payload;
    this.type = TODO_ACTIONS.TOGGLE_TODO;
  }

}
export class RemoveTodo {
  constructor(payload) {
    this.payload = payload;
    this.type = TODO_ACTIONS.REMOVE_TODO;
  }

}
export class FavoriteTodoRequest {
  constructor(payload) {
    this.payload = payload;
    this.type = TODO_ACTIONS.FAVORITE_TODO_REQUEST;
  }

}
export class FavoriteTodoSuccess {
  constructor(payload) {
    this.payload = payload;
    this.type = TODO_ACTIONS.FAVORITE_TODO_SUCCESS;
  }

}
export class FavoriteTodoFailed {
  constructor(payload) {
    this.payload = payload;
    this.type = TODO_ACTIONS.FAVORITE_TODO_FAILED;
  }

} // Create Union from Classes, note omit any non payload classes from this union type

// Uses an init function to easy complex computation if needed
function init() {
  const sampleTodo = {
    id: 1,
    description: 'Sample Todo #1',
    completed: false,
    favorite: false
  };
  const sampleCompletedTodo = {
    id: 2,
    description: 'Sample Todo #2',
    completed: true,
    favorite: false
  };
  return {
    todos: dataModel([sampleTodo, sampleCompletedTodo])
  };
} // Uses Immer produce to reduce awkward spreading and clean up code readability


export const todoReducer = produce((draft = init(), action) => {
  switch (action.type) {
    case TODO_ACTIONS.ADD_TODO:
      {
        const newTodo = {
          id: Math.floor(Math.random() * 1000),
          // Either DB or UUID library
          description: '' + action.payload,
          completed: false,
          favorite: false
        };
        draft.todos.data.push(newTodo);
        return draft;
      }

    case TODO_ACTIONS.TOGGLE_TODO:
      {
        const todos = draft.todos.data.map(t => {
          if (t.id === action.payload) {
            t.completed = !t.completed;
          }

          return t;
        });
        draft.todos.setData(todos);
        return draft;
      }

    case TODO_ACTIONS.REMOVE_TODO:
      {
        const todos = draft.todos.data.filter(t => t.id !== action.payload);
        draft.todos.setData(todos);
        return draft;
      }

    case TODO_ACTIONS.FAVORITE_TODO_SUCCESS:
      {
        const todos = draft.todos.data.map(t => {
          if (t.id === action.payload) {
            t.favorite = !t.favorite;
          }

          return t;
        });
        draft.todos.setData(todos);
        return draft;
      }

    case TODO_ACTIONS.FAVORITE_TODO_FAILED:
      {
        // Handle error
        return draft;
      }

    default:
      {
        return draft;
      }
  }
});