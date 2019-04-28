import React, { Component } from "react";
import logo from "./logo.svg";
import App from "./App";

class Component2 extends Component {
  render() {
    return (
      <div>
        <h1>Datum: {this.props.datum}</h1>
        <h2>Godina: {this.props.godina}</h2>
      </div>
    );
  }
}
export default Component2;
