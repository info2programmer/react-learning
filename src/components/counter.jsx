import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: []
  };

  rendarTags() {
    if (this.state.tags.length === 0) return <p>There are no tags found</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  render() {
    return <div>{this.rendarTags()}</div>;
  }
}

export default Counter;
