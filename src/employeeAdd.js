import React, { Component } from "react";
import axios from "axios";

import querystring from "querystring";

export default class employeeAdd extends Component {
  constructor(props) {
    //Intialize state and bind functions

    super(props);
    this.state = {
      Name: "",
      Design: "",
      Salary: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this); //bind function in constructor
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeD = this.handleChangeD.bind(this);
    this.handleChangeS = this.handleChangeS.bind(this);
  }

  handleChange(event) {
    //set state for Name
    this.setState({
      Name: event.target.value
    });
  }

  handleChangeD(event) {
    //set state for designation
    this.setState({
      Design: event.target.value
    });
  }

  handleChangeS(event) {
    //set state for salaary
    this.setState({
      Salary: event.target.value
    });
  }

  handleSubmit(event) {
    //function after submit
    event.preventDefault();
    var data = {
      name: this.state.Name,
      designation: this.state.Design,
      salary: this.state.Salary
    };

    axios
      .post("/emp", querystring.stringify(data)) //posting data using axios in server
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });

    window.location.assign("/");
    //this.props.history.push('/');
  }

  render() {
    return (
      <div className="content">
        <form
          className="form"
          onSubmit={this.handleSubmit}
          id="formContact"
          method="POST"
        >
          <input
            id="name"
            type="name"
            name="Name"
            pattern="[A-Z][a-z]*[[\s][A-Z][a-z]*]*"
            title="First letter capital,Only Alphabets"
            placeholder="Employee Name"
            onChange={this.handleChange}
            required
          />
          <br />

          <input
            name="Designation"
            placeholder="Employee designation"
            pattern="[A-Z][a-z]*[[\s][A-Z][a-z]*]*"
            title="First letter capital,Only Alphabets"
            onChange={this.handleChangeD}
            required
          />
          <br />
          <input
            name="Salary"
            placeholder="Employee salary"
            pattern="((\d+)((\.\d{1,2})?))$"
            title="Only numbers,2 digits after decimal"
            onChange={this.handleChangeS}
            required
          />
          <br />
          <input
            type="submit"
            value="Submit"
            className="btn--cta"
            id="btn-submit"
          />
        </form>
      </div>
    );
  }
}
