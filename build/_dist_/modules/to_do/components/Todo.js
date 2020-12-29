import { createVNode } from "../../../../web_modules/inferno.js";
import { RemoveTodo, ToggleTodo } from '../store/todo.store.js';
import { Component } from '../../../../web_modules/inferno.js';
import { connect } from '../../../../web_modules/inferno-redux.js'; // You can import and use un-typed Inferno Bootstrap Components wth this method with @ts-ignore
// @ts-ignore
// import {Card, CardHeader} from 'inferno-bootstrap'

class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleToggle() {
    this.props.dispatch(new ToggleTodo(this.props.todo.id));
  }

  handleRemove() {
    this.props.dispatch(new RemoveTodo(this.props.todo.id));
  }

  render() {
    return createVNode(1, "div", "card mt-2 mb-2", [createVNode(1, "div", "card-header", createVNode(1, "div", "d-flex justify-content-between", [createVNode(1, "button", "close", createVNode(1, "span", null, "\u2713", 16, {
      "aria-hidden": "true"
    }), 2, {
      "onClick": this.handleToggle,
      "type": "button",
      "aria-label": "Toggle"
    }), createVNode(1, "button", "close", createVNode(1, "span", null, "\xD7", 16, {
      "aria-hidden": "true"
    }), 2, {
      "onClick": this.handleRemove,
      "type": "button",
      "aria-label": "Close"
    })], 4), 2), createVNode(1, "div", "card-body", createVNode(1, "h1", "text-pink-600", this.props.todo.description, 0), 2)], 4);
  }

}

export default connect()(Todo);