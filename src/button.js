import React from "react";

export default class GuessButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: 87,
      userNumber: 22
    };
  }

  render() {
    const difference = this.state.randomNumber - this.state.userNumber;
    console.log(difference);

    return <button>I'm a button</button>;
  }
}
