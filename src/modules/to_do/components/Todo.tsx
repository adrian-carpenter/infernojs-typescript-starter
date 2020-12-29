import {
  RemoveTodo,
  TodoActionTypeUnion,
  ToggleTodo,
} from '../store/todo.store'
import { Component } from 'inferno'
import { TTodo } from '../todo.models'
import { connect, Dispatch } from 'inferno-redux'

// You can import and use un-typed Inferno Bootstrap Components wth this method with @ts-ignore
// @ts-ignore
// import {Card, CardHeader} from 'inferno-bootstrap'

interface IProps {
  todo: TTodo
  dispatch?: Dispatch<TodoActionTypeUnion>
}

class Todo extends Component<IProps> {
  constructor(props) {
    super(props)
    this.handleToggle = this.handleToggle.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }

  handleToggle() {
    this.props.dispatch(new ToggleTodo(this.props.todo.id))
  }

  handleRemove() {
    this.props.dispatch(new RemoveTodo(this.props.todo.id))
  }

  render() {
    return (
      <div class="card mt-2 mb-2">
        <div className="card-header">
          <div className="d-flex justify-content-between">
            <button
              onClick={this.handleToggle}
              type="button"
              class="close"
              aria-label="Toggle"
            >
              <span aria-hidden="true">&#x2713;</span>
            </button>
            <button
              onClick={this.handleRemove}
              type="button"
              class="close"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
        <div class="card-body">
          <h1 className="text-pink-600">{this.props.todo.description}</h1>
        </div>
      </div>
    )
  }
}

export default connect()(Todo)
