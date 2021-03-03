import React, { useState } from "react";
import { postChargeCalculation } from "./chargesServices";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function CalculateChargeForm() {
  const [to, setTo] = useState(new Date());
  const [from, setFrom] = useState(new Date());

  const handleSubmit = async (e) => {
    const chargeCalculationDate = {
      from,
      to
    };
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

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default CalculateChargeForm;
