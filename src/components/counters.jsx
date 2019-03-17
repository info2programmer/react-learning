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

   // This Function For Reset 
   handelReset = () =>{
    let counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    })

    this.setState({counters})
  }

  // Delete Counter Methord
  handelDelete = counterId =>{
    let counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters})
  }

// This Function For Handel Incrment Each Count 
handelIncriment = counter =>{
  let counters = [...this.state.counters];
  let index = counters.indexOf(counter)
  counters[index] = {...counter}
  counters[index].value++
  this.setState({counters})
  //   this.setState({counters})
}

 

  render() {
    return (
      <div>
        <button className="btn-primary btn btn-sm m-2" onClick={this.handelReset}>Reset</button>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} onDelete={this.handelDelete} counter={counter} onIncriment = {this.handelIncriment}/>
        ))}
      </div>
    );
  }
}

export default Counters;
