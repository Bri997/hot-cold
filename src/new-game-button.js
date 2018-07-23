import React from "react";

export default class NewGame extends React.Component {
  constructor() {
    super();
    this.makeRandomNumber();
  }
  makeRandomNumber() {
    this.state = {
      randomNumber: Math.floor(Math.random() * 101)
    };
    console.log(this.state.randomNumber);
  }
  render() {
    return (
      <div className="newNumber">
        <button onClick={() => this.makeRandomNumber()}>
          I Start A New Game
        </button>
      </div>
    );
  }
}
