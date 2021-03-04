import React, { useState, useEffect } from "react";
import { getAllCharges, getPerUnitChargeList } from "./chargesServices";
import FilterList from "../../common/filterList";
// import axios from 'axios';
import { Link } from "react-router-dom";
import Pagination from "../../common/pagination";

const Charges = () => {
  const [charges, setCharges] = useState([]);

  useEffect(async () => {
    const { data } = await getAllCharges();
    data.sort((a, b) => a.from - b.from);
    setCharges(data);
  }, []);


  return (
    <>
      <div className="row m-2">
        <div className="col">
          <h1>Charges</h1>
        </div>
      </div>
      <div className="row m-2">
        <div className="col">
          
            <>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Unit Number</th>
                    <th scope="col">From</th>
                    <th scope="col">To</th>
                    <th scope="col">Amount</th>
                    <th scope="col">UnitDetail</th>
                  </tr>
                </thead>
                <tbody>
                {charges.length > 0 
                      ? charges.map((charge, index) => (
                      <tr key={charge.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{charge.unitNumber}</td>
                        <td>{charge.from}</td>
                        <td>{charge.to}</td>
                        <td>{charge.amount}</td>
                        <td><Link className="btn btn-secondary btn-sm active m-2" to = {`/charges/${charge.unitNumber}`} role="button" aria-pressed="true">Detail</Link></td>
                        <td></td>
                      </tr>
                    ))
                      : <tr></tr>
                  }
                </tbody>
              </table>
              {/* <Pagination
                pages={pages}
                currentPage={page}
                onPageSelect={(pagenum) => pageSelected(pagenum)}
              /> */}
              <div>
                <Link className="btn btn-secondary btn-sm active m-2" to = {`/charges/calculate`} role="button" aria-pressed="true">
                  Calculate Charge
                </Link>
              </div>
            </>
          
        </div>
      </div>
    </>
  );
};

export default Charges;
