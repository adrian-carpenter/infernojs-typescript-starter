import { Component, SemiSyntheticEvent } from 'inferno'
import { Store } from 'redux'
import { StoreModel } from '../../../store/app.store'
import { AddTodo } from '../store/todo.store'

interface IState {
  value: string
}

// Better than an <any> type to enforce no additional props other than default
interface IProps {}

export class AddTodoForm extends Component<IProps, IState> {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }

  /**
   * Typing of SemiSyntheticEvent generic grants types to argument
   * @param event
   */
  handleInput(event: SemiSyntheticEvent<HTMLInputElement>) {
    this.setState({
      value: event.currentTarget.value,
    })
  }

  handleAdd() {
    const store: Store<StoreModel> = this.context.store
    store.dispatch(new AddTodo(this.state.value))
    this.setState({
      value: '',
    })
  }

  render() {
    return (
      <div className="d-flex align-items-center flex-column">
        <div className="input-group-text">
          <input
            value={this.state.value}
            className="form-control"
            onInput={this.handleInput}
          />
        </div>
        <button
          disabled={!this.state.value}
          onClick={this.handleAdd}
          className="btn btn-primary mt-2"
        >
          <span className="text-3xl p-2">Add</span>
        </button>
      </div>
    )
  }
}
