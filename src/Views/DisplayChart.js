import React, { Component } from "react";
import * as ReactD3 from "react-d3-components";
//import Range from "./Range";
import axios from "axios";
export default class DisplayChart extends Component {
  state = {
    //intializing state
    d: []
  };
  componentDidMount() {
    //gets called after render()
    axios.get("http://localhost:8082/height").then(res => {
      console.log(res);
      const dataH = res.data;
      this.setState({ dataH });
      console.log(this.state.dataH);
    });
  }
  renderTable = () => {
    //function for Adding data in table format
    return this.state.dataH[0].values.map(value => {
      //fetching each value in JSON
      // var str = value.d;
      return (
        <tr>
          <td>{value.x}</td>

          <td>{value.y}</td>

          <td>{value.d + " "}</td>
        </tr>
      );
    });
  };

  scale = value => {
    // some color selection
    return "rgb(134, 65, 244)"; //'rgb(68, 105, 173)';
  };

  render() {
    var BarChart = ReactD3.BarChart;

    return (
      <div>
        {document.getElementById("location")}
        <label class="yaxis">No of People</label>
        <BarChart
          data={this.state.dataH}
          width={500}
          height={400}
          margin={{ top: 50, bottom: 50, left: 30, right: 10 }}
          colorScale={this.scale}
        />
        <label className="xaxis">Range of Heights</label>
        <br />
        <br />

        <center>
          <table overflow="scroll">
            <tr>
              <th>Range</th>
              <th>No of People</th>
              <th>Heights</th>
            </tr>
            {this.state && this.state.dataH && this.renderTable()}
          </table>
        </center>
      </div>
    );
  }
}
