import React, { Component } from "react";

class Arya extends Component {
  state = { myString: "Hello world", myCode: "Hello Arya" };

  render() {
    return (
      <div className="Arya">
        <h1>{this.state.myString}</h1>
        <h1 className="ar">{this.state.myCode}</h1>
      </div>
    );
  }
}
export default Arya;
