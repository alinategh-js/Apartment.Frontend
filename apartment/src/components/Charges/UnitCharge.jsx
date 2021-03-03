import React, { useState, useEffect } from "react";
import { getUnitChargeData } from "./unitchargesServices";

// import { Link } from "react-router-dom";
import Pagination from "../../common/pagination";
import { useParams } from "react-router-dom";

// import {getUnitList} from "./Charges/unitchargesServices"

const UnitCharge = () => {

  const { unitId } = useParams();

  const [unitcharges, setUnitCharges] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(5);

  //componentDidMount
  useEffect(() => {
    setUnitCharges(getUnitChargeData());
    // todo : api call using "unitId"
    
  }, []);

  const pageSelected = async (page) => {
    // const {getData} = await axios.get(` ${page}`);
    setPage(page);
  };
  
  const getCharge = async () => {

  }

  

  return (
    <div>
      {/* <header><h5> UnitDetail's Charge </h5></header> */}
      <div className="inner bg-light">
        <div className="row m-2">
          <div className="col-md-4 col-sm-4 col-xs-6 col-1">
            <div className="input-layer">
              <label><b> Unit Number :</b> </label>

            </div>
          </div>

          <div className=" col-md-4 col-sm-4 col-xs-6 col-1">
            <div className="input-layer">
              <label> <b>Owner :</b> </label>
            </div>
          </div>

          <div className="col-md-4 col-sm-4 col-xs-6 col-2">
            <div className="input-layer">
              <label> <b>Resident :</b> </label>
            </div>
          </div>

          <div className="col-md-4 col-sm-4 col-xs-6 col-2">
            <div className="input-layer">
              <label><b> Area :</b> </label>
            </div>
          </div>

          <div className="col-md-4 col-sm-4 col-xs-6 col-3">
            <div className="textarea-layer">
              <label><b> From : </b></label>
            </div>
          </div>

          <div className="col-md-4 col-sm-4 col-xs-6 col-3">
            <div className="textarea-layer">
              <label><b> To : </b></label>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3>Unit Charges</h3>

        <table className="table table-striped" style={{ border: "none" }}>
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
      </div>
    </div>
  );
};

export default UnitCharge;
