import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  handelIncriment() {
    console.log("Increment  Clecked");
  }
  render() {
    return (
      <div>
        <span className={this.getCounterClasses()}>{this.formatCounter()}</span>
        <button
          onClick={this.handelIncriment}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getCounterClasses() {
    let badgeIndicator = "m-2 badge badge-";
    badgeIndicator += this.state.count === 0 ? "warning" : "primary";
    return badgeIndicator;
  }

  formatCounter() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
