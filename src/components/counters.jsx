import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 3 }
    ]
  };

  // Delete Counter Methord
  handelDelete = counterId =>{
    let counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters})
  }

  render() {
    return (
      <div>
        <button className="btn-primary btn btn-sm m-2">Reset</button>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} onDelete={this.handelDelete} counter={counter}/>
        ))}
      </div>
    );
  }
}

export default Counters;
