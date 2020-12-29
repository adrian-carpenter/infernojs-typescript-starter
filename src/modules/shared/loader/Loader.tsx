import { Component, InfernoNode } from 'inferno'
import { Spinner } from './Spinner'

interface Props {
  loading: boolean
  component?: InfernoNode
}

export class Loader extends Component<Props> {
  constructor(props) {
    super(props)
  }
  render() {
    const { component = Spinner, loading, children } = this.props
    return loading ? component : children
  }
}
