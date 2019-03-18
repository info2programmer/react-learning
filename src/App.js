import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 3 }
    ]
  };

  // This Function For Reset
  handelReset = () => {
    let counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  // Delete Counter Methord
  handelDelete = counterId => {
    let counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  // This Function For Handel Incrment Each Count
  handelIncriment = counter => {
    let counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    //   this.setState({counters})
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounter={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handelReset}
            onIncrement={this.handelIncriment}
            onDelete={this.handelDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
