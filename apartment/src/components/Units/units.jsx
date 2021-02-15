import React, { Component } from "react";
import {getData} from "./unitsServices";

class Units extends Component {
  state = {
      units: [
          
      ]
  };

componentDidMount(){
    this.setState({
        units: getData()
    })
}

  render() {
    return (
      <>
        <h1>واحد ها</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">شماره واحد</th>
              <th scope="col">مالک</th>
              <th scope="col">ساکن</th>
              <th scope="col">متراژ</th>
            </tr>
          </thead>
          <tbody>
            {this.state.units.map((unit, index) => (
                <tr>
              <th scope="row">{index}</th>
              <td>{unit.unitNumber}</td>
              <td>{unit.owner}</td>
              <td>{unit.resident}</td>
              <td>{unit.area}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Units;
