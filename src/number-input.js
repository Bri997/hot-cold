import React from "react";

export default function NumberInput(props) {
  return (
    <div className="userGuess">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type="number"
        id={props.id}
        min={props.min}
        max={props.max}
        onChange={e => props.onChange(e)}
      />
    </div>
  );
}
