import React, { Component } from "react";

export default class SideView extends Component {
  //index bar
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <h2>
              <a href="/">View Employee</a>
            </h2>
            <h2>
              <a href="/chart">Show Chart</a>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}
