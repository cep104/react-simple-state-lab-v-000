import React, { Component } from "react";

export default class Cell extends Component {
  //copy from read me assign color to props.value or whatever you call it in matrix when passing it down.
  constructor(props) {
    super();
    this.state = {
      color: props.value,
    }; // ...define initial state with a key of 'color' set to the 'value' prop
  }

  onChangeColor = () => {
    this.setState({
      color: "#333",
    });
  };
  render() {
    return (
      //add the style and make sure it is from the read me it will be this.state.color
      <div
        className="cell"
        style={{ backgroundColor: this.state.color }}
        onClick={this.onChangeColor}
      ></div>
    );
  }
}
