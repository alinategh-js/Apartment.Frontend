import React, { Component } from "react";
import { getData } from "./peopleServices";

class People extends Component {
  state = {
    people: [],
  };

  componentDidMount() {
    this.setState({
      people: getData(),
    });
  }

  render() {
    return (
      <>
        <h1>آدم ها</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">نام</th>
              <th scope="col">شماره تلفن</th>
            </tr>
          </thead>
          <tbody>
            {this.state.people.map((person, index) => (
              <tr>
                <th scope="row">{person.id}</th>
                <td>{person.name}</td>
                <td>{person.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default People;
