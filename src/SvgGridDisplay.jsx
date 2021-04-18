//Trying to create new React component, doesn't work
import { Component } from "react";

export class gridRender extends Component {
  render() {
    return (
      <svg width="500" height="200">
        <circle
          cx="250"
          cy="250"
          r="40"
          stroke="black"
          stroke-width="3"
          fill="red"
        />
      </svg>
    );
  }
}
