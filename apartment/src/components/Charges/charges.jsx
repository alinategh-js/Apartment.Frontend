import React, { Component } from "react";
import { getData } from "./chargesServices";
import { getUnitList } from "./chargesServices";
import FilterList from "../../common/filterList";
// import axios from 'axios';
// import { Link, Redirect } from "react-router-dom";
import Pagination from "../../common/pagination";

class Charges extends Component {
  state = {
    charges: [],
    unitList: [],
    selectedUnit: { id: 0 },
    pages: 3,
    page: 1,
  };

  componentDidMount = () =>{
    this.setState({
      charges: getData(),
      unitList: getUnitList(),
      //   //   const {data} = await axios.get(`  ${this.state.page}`);
      //   //units: data.data,
      //     pages: data.total_pages,
      //     page: 1
    });
  }

  pageSelected = async (page) => {
    // api call to get new page of charges from backend
    this.setState({
      // units: getData,
      page: page
      })

  };

  


  render() {
    const { unitList, selectedUnit, pages, page } = this.state;


    return (
      <>
      
      <div className="row m-2">
        <div className="col-2">
          <FilterList
              items={unitList}
              keyField="id"
              valueField="name"
              selectedItem={selectedUnit}
              onSelect={(item) => {
                this.setState({
                  selectedUnit: item,
                });
              }}
            />
        </div>
        <div className='col-10'>
          <table className="table table-striped">
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
                  <tr >
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
            onPageSelect={(pagenum) => this.pageSelected(pagenum)}
          />
        </div> 
      </div>
      </>
    );
  }
}

export default Charges;
