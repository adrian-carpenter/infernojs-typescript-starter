import { createVNode, createComponentVNode, createTextVNode } from "../web_modules/inferno.js";
import { Component, version } from '../web_modules/inferno.js';
import './App.css.proxy.js';
import './index.css.proxy.js';
import { store } from './store/app.store.js';
import { Provider } from '../web_modules/inferno-redux.js';
import TodoController from './modules/to_do/TodoController.js';
export class App extends Component {
  render() {
    return createComponentVNode(2, Provider, {
      "store": store,
      children: createVNode(1, "div", "App", createVNode(1, "header", "App-header", [createVNode(1, "p", null, `Welcome to Inferno ${version}`, 0), createVNode(1, "p", null, [createTextVNode("Edit "), createVNode(1, "code", null, "src/App.tsx", 16), createTextVNode(" and save to reload.")], 4), createVNode(1, "div", "container mx-auto", createComponentVNode(2, TodoController), 2)], 4), 2)
    });
  }

}