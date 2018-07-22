import React, { Component } from "react";
import Button from "./button";
import NumberInput from "./number-input";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "brian",
      number: 10,
      userGuess: 1
    };
  }
  render() {
    return (
      <div className="render">
        <label>
          <h1>Place your guess</h1>
          <input type="number" min={1} max={100} placeholder="Your Guess" />
        </label>
        <button>Guess</button>
        <div className="userGuess" />
        <Button />
      </div>
    );
  }
}

export default App;
