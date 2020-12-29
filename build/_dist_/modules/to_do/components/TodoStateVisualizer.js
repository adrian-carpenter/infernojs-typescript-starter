import { createVNode } from "../../../../web_modules/inferno.js";
import { Component } from '../../../../web_modules/inferno.js';
import { interpret } from '../../../../web_modules/xstate.js';
import { todoMachine } from '../todo.machine.js';
export class TodoStateVisualizer extends Component {
  constructor(props) {
    super(props);
    this.machineService = interpret(todoMachine).onTransition(current => this.setState({
      current
    }));
    this.state = {
      current: todoMachine.initialState
    };
  }

  componentDidMount() {
    this.machineService.start();
  }

  componentWillUnmount() {
    this.machineService.stop();
  }

  render() {
    console.log(this.machineService);
    return createVNode(1, "div", "d-flex flex-column", createVNode(1, "h1", null, this.state.current, 0), 2);
  }

}