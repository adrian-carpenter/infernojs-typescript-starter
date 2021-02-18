import { Component, version } from 'inferno'
import './App.css'
import Logo from './logo'
import './index.css'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo width="80" height="80" />
          <p>{`Welcome to Inferno ${version}`}</p>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </header>
      </div>
    )
  }
}
