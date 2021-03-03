import React, { useState } from "react";
import { postPerson } from "./peopleServices";

function PersonForm() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e) => {
    const person = {
      fullName: name,
      phoneNumber,
    };
    await postPerson(person);
  };

  const handleChange = (e) => {
    let target = e.target;
    if (target.name === "name") setName(target.value);
    else if (target.name === "phonenumber") setPhoneNumber(target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          placeholder="Enter Name"
          value={name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phonenumber">PhoneNumber</label>
        <input
          type="text"
          className="form-control"
          id="phonenumber"
          name="phonenumber"
          value={phoneNumber}
          placeholder="09---------"
          onChange={handleChange}
        ></input>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default PersonForm;
