import { Component, version } from 'inferno'
import './App.css'
import './index.css'
import { store } from './store/app.store'
import { Provider } from 'inferno-redux'
import TodoController from './modules/to_do/TodoController'

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <p>{`Welcome to Inferno ${version}`}</p>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <div className="container mx-auto">
              <TodoController />
            </div>
          </header>
        </div>
      </Provider>
    )
  }
}
