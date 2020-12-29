import { Component } from 'inferno'
import { Loader } from '../../shared/loader/Loader'

export class TodoStateVisualizer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="d-flex flex-column">
        <h1>Machine State</h1>
        <Loader loading={false}>
          <h3>Loading</h3>
        </Loader>
      </div>
    )
  }
}
