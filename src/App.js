import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MalaKomponenta from "./MalaKomponenta";
import Component2 from "./Component2";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <button onClick="imeFunkcije">Click ME</button>
        <Component2 />
        <MalaKomponenta ime="Karlo" prezime="Music" />
        <Component2 datum="12.03." godina="1998" />
      </div>
    );
  }
}

export default App;
