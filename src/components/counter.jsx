import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  // constructor() {
  //   super();
  //   this.handelIncriment = this.handelIncriment.bind(this);
  // }
  handelIncriment = id => {
    this.setState({ value: this.state.value + 1 });
  };
  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.children}
        <span className={this.getCounterClasses()}>{this.formatCounter()}</span>
        <button
          onClick={() => {
            this.handelIncriment({ id: 2 });
          }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getCounterClasses() {
    let badgeIndicator = "m-2 badge badge-";
    badgeIndicator += this.state.value === 0 ? "warning" : "primary";
    return badgeIndicator;
  }

  formatCounter() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
