import React, { Component } from "react";
import GuessButton from "./button";
import NumberInput from "./number-input";
import "./App.css";
import NewGame from "./new-game-button";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="render">
        <h1>Place your guess</h1>
        <NewGame />
        <NumberInput />
        <GuessButton />
      </div>
    );
  }
}

export default App;
