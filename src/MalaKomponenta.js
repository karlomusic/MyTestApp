import React, { Component } from "react";
import "./index.css";
class MalaKomponenta extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfClicks: 1,
      nuberOfView: 3,
      lastViewedBy: "Domeniko",
      komp1: {
        komp2: "komp2",
        komp3: {
          komp4: "komp4"
        }
      }
    };
  }

  componentWillMount() {
    console.log("will mount");
  }
  componentDidMount() {
    console.log("DID mount");
  }

  povecajBrojac = () => {
    let brojac = this.state.numberOfClicks + 1;
    this.setState({ numberOfClicks: brojac });
    console.log("povecajBrojac stanje: " + this.state.numberOfClicks);
    this.setState({ lastViewedBy: "Romana" });
  };

  render() {
    let h1;
    if (this.state.numberOfClicks > 5) {
      h1 = <h1>TOO MANY CLICKS</h1>;
    } else {
      h1 = <h1>CLCI again</h1>;
    }

    return (
      //MOJ HTML
      <div>
        <p>{this.state.komp1.komp3.komp4}</p>
        <h1>{this.state.lastViewedBy} PRVO RENDERIRANJE</h1>
        <h1>{this.props.prezime} Karlo mala 3</h1>
        <h1>{this.props.prezime + this.props.ime} </h1>
        <h1>{this.state.numberOfClicks} </h1>

        <button className="coolButton" onClick={this.povecajBrojac.bind(this)}>
          Click ME
        </button>
        {h1}
      </div>
    );
  }
}

export default MalaKomponenta;
