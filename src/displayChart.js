import React, { Component } from "react";
import * as ReactD3 from "react-d3-components";
export default class displayChart extends Component {
  render() {
    var BarChart = ReactD3.BarChart;

    var data = [
      {
        label: "somethingA",
        values: [
          { x: "SomethingA", y: 10 },
          { x: "SomethingB", y: 4 },
          { x: "SomethingC", y: 3 }
        ]
      }
    ];
    return (
      <div>
        {document.getElementById("location")}
        <BarChart
          data={data}
          width={400}
          height={400}
          margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
        />
        ,
      </div>
    );
  }
}
