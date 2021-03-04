import React, { useContext, useState } from "react";
import { BuildingContext } from "../../App";
import { postUnit } from "./unitsServices";

function UnitForm() {
  const building = useContext(BuildingContext);
  const [unitNumber, setUnitNumber] = useState(0);
  const [area, setArea] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const unit = {
      number: parseInt(unitNumber),
      buildingId: building.id,
      area: area.toString()
    }
    console.log(unit)
    await postUnit(unit);
  };
  const handleChange = (e) => {
    let target = e.target;
    if (target.name === "unitNumber") setUnitNumber(target.value);
    else if (target.name === "area") setArea(target.value);
  };

  return (
    <>
    <h1>Add New Unit</h1>
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
    </>
  );
}

export default UnitForm;
