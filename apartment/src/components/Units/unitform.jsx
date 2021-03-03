import React, { useState } from "react";
import { postUnit } from "./unitsServices";

function UnitForm() {
  const [unitNumber, setUnitNumber] = useState(0);
  const [area, setArea] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const unit = {
      number: unitNumber,
      buildingId: 3,
      area
    }
    await postUnit();
  };
  const handleChange = (e) => {
    let target = e.target;
    if (target.name === "unitNumber") setUnitNumber(target.value);
    else if (target.name === "area") setArea(target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="unitnumber">Unit Number</label>
        <input
          type="number"
          className="form-control"
          id="unitNumber"
          name="unitNumber"
          value={unitNumber}
          placeholder="Enter unitNumber"
          onChange={handleChange}
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="Area">Area</label>
        <input
          type="number"
          className="form-control"
          id="area"
          name="area"
          value={area}
          placeholder="Enter area of unit"
          onChange={handleChange}
        ></input>
        <small id="area" className="form-text text-muted">
          Enter unit area by meters.
        </small>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default UnitForm;
