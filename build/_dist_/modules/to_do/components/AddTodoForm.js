import { createVNode } from "../../../../web_modules/inferno.js";
import { Component } from '../../../../web_modules/inferno.js';
import { AddTodo } from '../store/todo.store.js';
export class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }
  /**
   * Typing of SemiSyntheticEvent generic grants types to argument
   * @param event
   */


  handleInput(event) {
    this.setState({
      value: event.currentTarget.value
    });
  }

  handleAdd() {
    const store = this.context.store;
    store.dispatch(new AddTodo(this.state.value));
    this.setState({
      value: ''
    });
  }

  render() {
    return createVNode(1, "div", "d-flex align-items-center flex-column", [createVNode(1, "div", "input-group-text", createVNode(64, "input", "form-control", null, 1, {
      "value": this.state.value,
      "onInput": this.handleInput
    }), 2), createVNode(1, "button", "btn btn-primary mt-2", createVNode(1, "span", "text-3xl p-2", "Add", 16), 2, {
      "disabled": !this.state.value,
      "onClick": this.handleAdd
    })], 4);
  }

}