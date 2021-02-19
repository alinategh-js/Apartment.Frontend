import React, { Component } from "react";
import { getData } from "./unitchargesServices";
// import axios from 'axios';
import { Link } from "react-router-dom";
import Pagination from "../../common/pagination";

class UnitCharge extends Component {
  state = {
    unitcharges: [],
    pages: 5,
    page: 1,
  };

  componentDidMount() {
    this.setState({
      unitcharges: getData(),
      //   const {data} = await axios.get(`  ${this.state.page}`);
      //units: data.data,
      //     pages: data.total_pages,
      //     page: 1
    });
  }

  // pageSelected = async (page) => {
  //   // const {getData} = await axios.get(` ${page}`);
  //   this.setState({
  //     // units: getData,
  //     page: page
  //     })

  // };

  render() {
    const { unitcharges, pages, page } = this.state;

    return (
      <>
        <Link to="/charges/:id">
          <button className="btn btn-success m-2">Add UnitCharge</button>
        </Link>
        <h1>UnitCharge</h1>

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item As</th>
              <th scope="col">Payer</th>
              <th scope="col">Amount</th>
              <th scope="col">Calculate's Type</th>
            </tr>
          </thead>
          <tbody>
            {this.state.unitcharges.map((unitcharge, index) => (
              <tr>
                <th scope="row">{index}</th>
                <td>{unitcharge.itemAs}</td>
                <td>{unitcharge.payer}</td>
                <td>{unitcharge.amount}</td>
                <td>{unitcharge.calculatesType}</td>
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

export default UnitCharge;
