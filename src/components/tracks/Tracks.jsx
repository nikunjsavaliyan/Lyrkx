import React, { Component } from "react";
import { Consumer } from "../../context.jsx";

class Tracks extends Component {
  state = {};
  render() {
    return (
      <Consumer>
        {(value) => {
          console.log(value);
          return <h1>Tracks</h1>;
        }}
      </Consumer>
    );
  }
}

export default Tracks;
