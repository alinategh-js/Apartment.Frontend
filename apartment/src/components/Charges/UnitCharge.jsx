import React, {useState, useEffect } from "react";
import { getUnitChargeData } from "./unitchargesServices";
// import axios from 'axios';
// import { Link } from "react-router-dom";
import Pagination from "../../common/pagination";

// import {getUnitList} from "./Charges/unitchargesServices"


const UnitCharge = () => {
   
  

  const [unitcharges, setUnitCharges] = useState([])
  const [page, setPage] =useState(1)
  const [pages, setPages]=useState(5)

  
// class UnitCharge extends Component {
//   state = {
//     unitcharges: [],
//     // unitInfos:[],
//     pages: 5,
//     page: 1,
    
//   };
  
useEffect(() => {
  setUnitCharges(getUnitChargeData()) 
}, []);
  // componentDidMount() {
  //   this.setState({

  //     // unitinfos: getUnitList(), 

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
 
  
 



    return (
  <>
                
     
        <h3>Unit Charges</h3>

        <table className="table table-striped" style={{border: "none"}}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item As</th>
              <th scope="col">Payer</th>
              <th scope="col">Amount</th>
              <th scope="col">Formula Type</th>
            </tr>
          </thead>
          <tbody>
            {unitcharges.map((unitcharge, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{unitcharge.itemAs}</td>
                <td>{unitcharge.payer}</td>
                <td>{unitcharge.amount}</td>
                <td>{unitcharge.formulaType}</td>
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
            onPageSelect={(page) => pageSelected(page)}
          />
        </div>
      </>
    ); 
  }



export default UnitCharge;
