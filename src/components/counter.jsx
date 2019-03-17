import React, { Component } from "react";

class Counter extends Component {
  
  render() {
    return (
      <div>
        <span className={this.getCounterClasses()}>{this.formatCounter()}</span>
        <button onClick={() => this.props.onIncriment(this.props.counter)}  className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button className="btn-danger btn btn-sm m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
      </div>
    );
  }

  getCounterClasses() {
    let badgeIndicator = "m-2 badge badge-";
    badgeIndicator += this.props.counter.value === 0 ? "warning" : "primary";
    return badgeIndicator;
  }

  formatCounter() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
