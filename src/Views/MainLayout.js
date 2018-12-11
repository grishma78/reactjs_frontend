import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import employeeAdd from '../employeeAdd';
import axios from 'axios';
import ReactDOM from 'react-dom';
export default class MainLayout extends Component {

  componentDidMount() {       //gets called after render()
    axios.get("http://localhost:8082/listEmp")
      .then(res => {
        console.log(res);
        const posts = res.data;
        this.setState({ posts });
      })
  }

  renderTable = () => {                 //function for Adding data in table format
    return this.state.posts.map(value => {      //fetching each value in JSON
      return (

        <tr>

          <td>{value.Name}</td>

          <td>{value.Designation}</td>

          <td>{value.Salary}</td>
        </tr>

      )
    })
  }

  showform()      //display form in place of table
  {
    ReactDOM.render(<employeeAdd />, document.getElementById('tabid'));
  }

  render() {//table heading and call function to display contents
    return (
      <Router>
        <div className="split1 right">
          <div className="centered">
            <div id="tabid">
              <table overflow="scroll">
                <th>
                  Name
                  </th>
                <th>
                  Designation
                  </th>
                <th>
                  Salary
                  </th>
              </table>
              {this.state && this.state.posts &&
                this.renderTable()
              }
              <Link to={'/createEmp'}><button onClick={this.showform}>Add</button></Link>
            </div>
            <Switch>
              <Route exact path='/createEmp' component={employeeAdd} />

            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}