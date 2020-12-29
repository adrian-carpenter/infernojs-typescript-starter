import { Component } from '../../../../web_modules/inferno.js';
import { Spinner } from './Spinner.js';
export class Loader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      component = Spinner,
      loading,
      children
    } = this.props;
    return loading ? component : children;
  }

}