import React, {  useEffect, useState } from "react";
import { getData } from "./unitsServices";
//import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "../../common/pagination";

const Units = () =>{
  const [units,setUnits]=useState([])
  const [page, setPage]=useState(1)
  const [pages,setPages]=useState(5)

// class Units extends Component {
//   state = {
//     units: [],
//     pages: 6,
//     page: 1,
//   };
useEffect (()=>{
  setUnits(getData())
}, []);
  // async componentDidMount() {
  //   this.setState({
  //     units: getData(),
  //     //   const {data} = await axios.get(`  ${this.state.page}`);
  //     //units: data.data,
  //     //     pages: data.total_pages,
  //     //     page: 1
  //   });
  // }

  const pageSelected = async (page) => {
    // const {getData} = await axios.get(` ${page}`);
    
      // units: getData,
      setPage(page)
      };

  

  
    // const { pages, page } = this.state;

    return (
      <>
       
        <h1>Units</h1>

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Unit Number</th>
              <th scope="col">Owner</th>
              <th scope="col">Resident</th>
              <th scope="col">Area</th>
              <th scope="col">Update</th>

            </tr>
          </thead>
          <tbody>
            {units.map((unit, index) => (
              <tr key={unit.id}>
                <th scope="row">{index + 1}</th>
                <td>{unit.unitNumber}</td>
                <td>{unit.owner}</td>
                <td>{unit.resident}</td>
                <td>{unit.area}</td>
                <td><Link className="btn btn-secondary btn-sm active m-2" to = {`/units/form/${unit.unitNumber}`} role="button" aria-pressed="true">Edit</Link></td>
                </tr>
            ))}
          </tbody>
        </table>

        <Pagination
          pages={pages}
          currentPage={page}
          onPageSelect={(page) => pageSelected(page)}
        />
      </>
    );
  }


export default Units;
