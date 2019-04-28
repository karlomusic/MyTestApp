import React, { Component } from "react";

class NovaComponenta extends Component {
  constructor(props) {
    super(props);

    this.state = {
        //objekt koji sprema stanje komponente
        element : "naziv"
    }


}


maleJSfunkcije = () => {

};



render() {
    return (
      //MOJ HTML
      <div >
          <h1 {this.props.IZVANA}></h1>
      
      /* bind preko onClick={this.maleJSfunkcije.bind(this)} */
      
      </div>
    );
  }


}

export default NovaComponenta;