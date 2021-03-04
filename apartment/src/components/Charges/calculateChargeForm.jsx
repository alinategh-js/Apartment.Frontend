import React, { useState } from "react";
import { postChargeCalculation } from "./chargesServices";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function CalculateChargeForm() {
  const [to, setTo] = useState(new Date());
  const [from, setFrom] = useState(new Date());
  const [issueDate, setIssueDate] = useState(new Date());

  const handleSubmit = async (e) => {
    e.preventDefault();
    const chargeCalculationDate = {
      from: from.toISOString(),
      to: to.toISOString(),
      issueDate: issueDate.toISOString()
    };
    console.log(chargeCalculationDate)
    await postChargeCalculation(chargeCalculationDate);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="from">From</label>
        <DatePicker
          className="form-control m-2"
          selected={from}
          onChange={(date) => setFrom(date)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="to">To</label>
        <DatePicker
          className="form-control m-2"
          selected={to}
          onChange={(date) => setTo(date)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="issueDate">Issue Date</label>
        <DatePicker
          className="form-control m-2"
          selected={issueDate}
          onChange={(date) => setIssueDate(date)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default CalculateChargeForm;
