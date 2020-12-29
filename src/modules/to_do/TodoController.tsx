import { Component } from 'inferno'
import { StoreModel } from '../../store/app.store'
import Todo from './components/Todo'
import { AddTodoForm } from './components/AddTodoForm'
import { TTodo } from './todo.models'
import { connect } from 'inferno-redux'
import { TodoStateVisualizer } from './components/TodoStateVisualizer'
import { DataModel } from '../../store/app.store.model'

interface IProps {
  todos?: DataModel<TTodo[]>
}

class TodoController extends Component<IProps> {
  constructor(props) {
    super(props)
  }

  render() {
    const { data } = this.props.todos
    const incomplete = data.filter((t) => !t.completed) || []
    const completed = data.filter((t) => t.completed) || []
    return (
      <>
        <AddTodoForm />
        <div class="d-flex flex-row justify-content-between">
          <div>
            <h1 className="">To Do</h1>
            <div class="d-flex flex-column">
              {incomplete.map((t) => (
                <Todo key={t.id} todo={t} />
              ))}
            </div>
          </div>
          <TodoStateVisualizer />
          <div>
            <h1 className="">Completed</h1>
            <div class="d-flex flex-column">
              {completed.map((t) => (
                <Todo key={t.id} todo={t} />
              ))}
            </div>
          </div>
        </div>
      </>
    )
  }
}

function mapStateToProps(state: StoreModel) {
  return {
    todos: state.todo.todos,
  }
}

export default connect(mapStateToProps)(TodoController)
