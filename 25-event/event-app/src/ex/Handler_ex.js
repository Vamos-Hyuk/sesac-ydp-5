import { Component } from 'react';

class Handler_ex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Hello World!',
    };
    this.changeMessage = this.changeMessage.bind(this);
  }

  changeMessage() {
    if (this.state.message === 'Hello World!') {
      this.setState({ message: 'Goodbye World!' });
    } else {
      this.setState({ message: 'Hello World!' });
    }
  }
  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <button onClick={this.changeMessage}>클릭</button>
      </div>
    );
  }
}

export default Handler_ex;
