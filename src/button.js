import React from "react";

export default class GuessButton extends React.Component {
  constructor() {
    super();
    this.state = {
      userNumber: 22
    };
  }

  render() {
    const difference = this.state.randomNumber - this.state.userNumber;

    return <button>I Check Your Guess</button>;
  }
}
