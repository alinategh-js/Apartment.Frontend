import React, { useState } from "react";
import { postBuilding, getBuilding } from "./homeServices";

function CreateBuilding() {
  const [buildingName, setBuildingName] = useState("");
  const [numberOfUnits, setNumberOfUnits] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const building = {
      name: buildingName,
      numberOfUnits,
    };
    await postBuilding(building);
  };

  const handleChange = (e) => {
    e.preventDefault();
    let target = e.target;
    if (target.name === "buildingName") setBuildingName(target.value);
    else if (target.name === "numberOfUnits") setNumberOfUnits(target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="buildingname">Building Name</label>
        <input
          type="text"
          className="form-control"
          name="buildingName"
          id="buildingName"
          value={buildingName}
          placeholder="Enter the building name"
          onChange={handleChange}
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="numberOfUnits">Number Of Units</label>
        <input
          type="number"
          className="form-control"
          name="numberOfUnits"
          id="numberOfUnits"
          value={numberOfUnits}
          placeholder="Enter number of units"
          onChange={handleChange}
        ></input>
      </div>

      <button type="submit" className="btn btn-primary ">
        Submit
      </button>
    </form>
  );
}

export default CreateBuilding;
