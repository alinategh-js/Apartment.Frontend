import React, {  useEffect, useState } from "react";
import { getUnit } from "./unitsServices";
//import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "../../common/pagination";

const Units = () =>{
  const [units,setUnits]=useState([])
  const [page, setPage]=useState(1)
  const [pages,setPages]=useState(5)
  const [size, setSize] = useState(5)

  //componentDidMount
useEffect (async ()=>{
  let {data} = await getUnit(page, size)
  setUnits(data)
  setPages(data[0].totalPages)
}, []);

  const pageSelected = async (page) => {
    //const {getData} = await axios.get(` ${page}`);

      setPage(page)
      let{data} = await getUnit(page, size)
      setUnits(data)
    };

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
              <tr key={unit.unitId}>
                <th scope="row">{index + 1}</th>
                <td>{unit.unitNumber}</td>
                <td>{unit.ownerName!=null ? unit.ownerName : "_"}</td>
                <td>{unit.residentName!=null ? unit.residentName : "_"}</td>
                <td>{unit.area}</td>
              
                <td><Link className="btn btn-secondary btn-sm active m-2" to = {`/units/edit/${unit.unitId}`} role="button" aria-pressed="true">Edit</Link></td>
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
