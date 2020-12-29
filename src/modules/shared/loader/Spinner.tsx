import { Component } from 'inferno'

export class Spinner extends Component {
  render() {
    return (
      <div class="spinner-border text-light" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    )
  }
}
