import { createVNode } from "../../../../web_modules/inferno.js";
import { Component } from '../../../../web_modules/inferno.js';
export class Spinner extends Component {
  render() {
    return createVNode(1, "div", "spinner-border text-light", createVNode(1, "span", "sr-only", "Loading...", 16), 2, {
      "role": "status"
    });
  }

}