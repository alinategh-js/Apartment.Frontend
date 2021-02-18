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
        <div className="row">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">نام</th>
                <th scope="col">شماره تلفن</th>
                <th scope="col">شماره واحد</th>
                <th scope="col">صاحب است؟</th>
              </tr>
            </thead>
            <tbody>
              {this.state.people.map((person, index) => (
                <tr>
                  <th scope="row">{person.id}</th>
                  <td>{person.name}</td>
                  <td>{person.phone}</td>
                  <td>{person.unitId}</td>
                  <td>{person.isOwner ? 1 : 0}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default People;
