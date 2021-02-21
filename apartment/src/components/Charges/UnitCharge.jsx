import React, { Component } from "react";
import { getData } from "./unitchargesServices";
// import axios from 'axios';
// import { Link } from "react-router-dom";
import Pagination from "../../common/pagination";
// import {getUnitList} from "./Charges/unitchargesServices"

class UnitCharge extends Component {
  state = {
    unitcharges: [],
    // unitInfos:[],
    pages: 5,
    page: 1,
  };


 

  componentDidMount() {
    this.setState({
      unitcharges: getData(),
      // unitinfos: getUnitList(), 

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
      page: page,
    });
  };

  render() {
    const { pages, page } = this.state;

    return (
      <>
      
      {/* <h4 >Unit Information </h4> */}

        {/* <table className="table col-md-4">
        <tbody>
            {this.state.unitInfos} => (
              <tr>
                <th scope="row"></th>
                <td>UnitNumber: {unitInfos.unitNumber}</td>
                <td>Owner : {unitInfos.owner}</td>
                <td>Resident: {unitInfos.resident}</td>
                <td>Unit Area: {unitInfos.unitArea}</td>
                <td>From : {unitInfos.from}</td>
                <td>To : {unitInfos.to}</td>
              </tr>
            ))} */}
            
          {/* </tbody>
        </table>
         */}
        <h1>UnitCharges</h1>

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
                <th scope="row">{index + 1}</th>
                <td>{unitcharge.itemAs}</td>
                <td>{unitcharge.payer}</td>
                <td>{unitcharge.amount}</td>
                <td>{unitcharge.calculatesType}</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td>-----</td>
              <td>Rezaii</td>
              <td>22000</td>
              <td>-----</td>
            </tr>
            <tr>
            <td></td>
            <td>-----</td>
            <td>Ahmadi</td>
            <td>22155</td>
            <td>-----</td>
            </tr>
          </tbody>
        </table>
        <div>
          <Pagination
            pages={pages}
            currentPage={page}
            onPageSelect={(page) => this.pageSelected(page)}
          />
        </div>
      </>
    );
  }
}

export default UnitCharge;
