import React, { Component } from "react";
import { getData } from "./chargesServices";
import { getUnitList } from "./chargesServices";
import FilterList from "../../common/filterList";
// import axios from 'axios';
//  import { Link } from "react-router-dom";
import Pagination from "../../common/pagination";

class Charges extends Component {
  state = {
    charges: [],
    unitList: [],
    selectedUnit: { id: 0 },
    pages: 3,
    page: 1,
  };

  componentDidMount() {
    this.setState({
      charges: getData(),
      unitList: getUnitList(),
      //   //   const {data} = await axios.get(`  ${this.state.page}`);
      //   //units: data.data,
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
    // const { charges, pages, page } = this.state;
    const { charges, unitList, selectedUnit, pages, page } = this.state;

    const filteredList =
      selectedUnit && selectedUnit.unitNumber
        ? charges.filter((x) => x.unitNumber === selectedUnit.unitNumber)
        : charges;
    const unitCount = filteredList.length;

    return (
      <div class="row m-2">
        <div className="col-3">
          <FilterList
            items={unitList}
            keyField="id"
            valueField="unitNumber"
            selectedItem={selectedUnit}
            onSelect={(item) => {
              this.setState({
                selectedNumber: item,
              });
            }}
          />
        </div>
        {/* <div className="col">
          {charges.length > 0 ? ( */}
        <>
          <h3>There are {unitCount} charges</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Unit Number</th>
                <th scope="col">From</th>
                <th scope="col">To</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              {this.state.charges.map((charge, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{charge.unitNumber}</td>
                  <td>{charge.from}</td>
                  <td>{charge.to}</td>
                  <td>{charge.amount}</td>
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
      </div>
      //   </div>
    );
  }
}

export default Charges;
