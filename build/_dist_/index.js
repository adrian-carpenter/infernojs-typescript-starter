import { createComponentVNode } from "../web_modules/inferno.js";
import { render } from '../web_modules/inferno.js';
import './tailwind.output.css.proxy.js';
import { App } from './App.js';
import * as serviceWorker from './serviceWorker.js';
render(createComponentVNode(2, App), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

serviceWorker.unregister();