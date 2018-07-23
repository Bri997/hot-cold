import React from "react";

export default class NumberInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      max: 100,
      userNumber: 2
    };
  }
  render() {
    return (
      <div className="userGuess">
        <label />
        <input
          type="number"
          placeholder="Guess Here"
          min={this.state.min}
          max={this.state.max}
          onChange={e => {
            this.setState({ userNumber: e });
            console.log(e.target.value);
          }}
          // onChange={e => this.props.onChange(e)}
        />
      </div>
    );
  }
}
