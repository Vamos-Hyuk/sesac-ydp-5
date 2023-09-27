import React, { Component } from 'react';

class Test1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    this.increaseByTwo = this.increaseByTwo.bind(this);
    this.decreaseByOne = this.decreaseByOne.bind(this);
  }

  increaseByTwo() {
    this.setState((prevState) => ({ count: prevState.count + 2 }));
  }

  decreaseByOne() {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increaseByTwo}>+2</button>
        <button onClick={this.decreaseByOne}>-1</button>
      </div>
    );
  }
}

export default Test1;
