import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import React, { useEffect, useState } from "react";
import { getAllPeople } from "../People/peopleServices";
import { useParams } from "react-router-dom";
import { updateUnit } from "./unitsServices";

function UnitOwnerResidentForm() {
  const [date, setDate] = useState(new Date());
  const [unitId, setUnitId] = useState(0);
  const [people, setPeople] = useState([]);
  const [ownerId, setOwnerId] = useState(0);
  const [residentId, setResidentId] = useState(0);
  const [residentNumber, setResidentNumber] = useState(0);

  const { id } = useParams();

  useEffect(async () => {
    let { data } = await getAllPeople();
    setPeople(data);
  }, []);

  const handleChange = (e) => {
    let target = e.target;
    setResidentNumber(target.value);
  };

  const handleSelect = (event) => {
    let personId = event.target.value;
    let residencyType = event.target.id;
    if (residencyType === "Owner") {
      setOwnerId(personId);
    } else if (residencyType === "Resident") {
      setResidentId(personId);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const unitOwnerResident = {
      ownerId: parseInt(ownerId),
      residentId: parseInt(residentId),
      residentCount: parseInt(residentNumber),
      date: date.toISOString(),
    };
    console.log(unitOwnerResident)
    await updateUnit(id, unitOwnerResident);
  };

  return (
    <>
    <h1>Edit Unit</h1>
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="resident">
            Resident
          </label>
        </div>
        <select className="custom-select" id="Resident" onChange={handleSelect} name="resident" value={residentId}>
          <option key="0">Choose...</option>
          {people.map((person) => (
            <option key={person.id} value={person.id}>
              {person.fullName}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="residentNumber">Number Of Resident</label>
        <input
          type="number"
          className="form-control"
          id="residentNumber"
          name="residentNumber"
          value={residentNumber}
          placeholder="Enter resident number"
          onChange={handleChange}
        ></input>
      </div>

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="owner">
            Owner
          </label>
        </div>
        <select className="custom-select" id="Owner" name="owner" value={ownerId} onChange={handleSelect}>
          <option>Choose...</option>
          {people.map((person) => (
            <option key={person.id} value={person.id}>
              {person.fullName}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group ">
        <label htmlFor="date " className="m-2">
          Date
        </label>
        {/* <input type="text" className="form-control" id="Date"  placeholder="Enter date"></input> */}
        <DatePicker selected={date} onChange={(date) => setDate(date)} />
      </div>

      <button type="submit" className="btn btn-primary m-2">
        Submit
      </button>
    </form>
    </>
  );
}

export default UnitOwnerResidentForm;
