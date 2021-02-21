import React, { Component } from "react";
import { getData } from "./unitsServices";
//import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "../../common/pagination";

class Units extends Component {
  state = {
    units: [],
    pages: 6,
    page: 1,
  };

  async componentDidMount() {
    this.setState({
      units: getData(),
      //   const {data} = await axios.get(`  ${this.state.page}`);
      //units: data.data,
      //     pages: data.total_pages,
      //     page: 1
    });
  }

  pageSelected = async (page) => {
    // const {getData} = await axios.get(` ${page}`);
    this.setState({
      // units: getData,
      page: page
      })

  };

  render() {
    const { units, pages, page } = this.state;

    return (
      <>
        <Link to="/units/new">
          <button className="btn btn-success m-2">Add Units</button>
        </Link>
        <h1>Units</h1>

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Unit Number</th>
              <th scope="col">Owner</th>
              <th scope="col">Resident</th>
              <th scope="col">Area</th>
            </tr>
          </thead>
          <tbody>
            {this.state.units.map((unit, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{unit.unitNumber}</td>
                <td>{unit.owner}</td>
                <td>{unit.resident}</td>
                <td>{unit.area}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination
          pages={pages}
          currentPage={page}
          onPageSelect={(page) => this.pageSelected(page)}
        />
      </>
    );
  }
}

export default Units;
