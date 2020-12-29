import { createVNode, createFragment, createComponentVNode } from "../../../web_modules/inferno.js";
import { Component } from '../../../web_modules/inferno.js';
import Todo from './components/Todo.js';
import { AddTodoForm } from './components/AddTodoForm.js';
import { connect } from '../../../web_modules/inferno-redux.js';
import { TodoStateVisualizer } from './components/TodoStateVisualizer.js';

class TodoController extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      data
    } = this.props.todos;
    const incomplete = data.filter(t => !t.completed) || [];
    const completed = data.filter(t => t.completed) || [];
    return createFragment([createComponentVNode(2, AddTodoForm), createVNode(1, "div", "d-flex flex-row justify-content-between", [createVNode(1, "div", null, [createVNode(1, "h1", "", "To Do", 16), createVNode(1, "div", "d-flex flex-column", incomplete.map(t => createComponentVNode(2, Todo, {
      "todo": t
    })), 0)], 4), createComponentVNode(2, TodoStateVisualizer), createVNode(1, "div", null, [createVNode(1, "h1", "", "Completed", 16), createVNode(1, "div", "d-flex flex-column", completed.map(t => createComponentVNode(2, Todo, {
      "todo": t
    })), 0)], 4)], 4)], 4);
  }

}

function mapStateToProps(state) {
  return {
    todos: state.todo.todos
  };
}

export default connect(mapStateToProps)(TodoController);