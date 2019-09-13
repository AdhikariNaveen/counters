import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  handleClickAdd = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleClickReduce = () => {
    this.setState((prevState, props) => ({
      count: prevState.count - 1
    }));
  };

  render() {
    return (
      <React.Fragment>
        <h3>
          <span>{this.state.count}</span>
        </h3>
        <button onClick={this.handleClickAdd}>Add</button>
        <button onClick={this.handleClickReduce}>Reduce</button>
      </React.Fragment>
    );
  }
}

export default Counter;
