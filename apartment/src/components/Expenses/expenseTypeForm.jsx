import React, { useState, useEffect } from "react";
import {  getFormulas, postExpenseType } from "./expensesServices";

function ExpenseTypeForm() {
  const [selectedFormulaName, setSelectedFormulaName] = useState("");
  const [formulaNames, setFormulaNames] = useState([]);
  const [payerOwner, setPayer] = useState(false);

  useEffect(async () => {
    //let {data} = await getExpensesType();
    setFormulaNames(await getFormulas());
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let expenseType = {
      name: selectedFormulaName,
      formulaName: selectedFormulaName,
      forOwner: payerOwner
    };
    await postExpenseType(expenseType);
  };

  const handleChange = (e) => {
    let target = e.target;
    setSelectedFormulaName(target.value);
  };

  const handleSelect = (event) => {
    let target = event.target;
    if (target.name === "payer"){
      if(target.value === 1) setPayer(true); // owner
      else setPayer(false); // resident
    } 
    else if (target.name === "formulaName") setSelectedFormulaName(target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Title</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          placeholder="Enter title"
          onChange={handleChange}
        ></input>
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="formulaName">
            Formula Name
          </label>
        </div>
        <select
          className="custom-select"
          id="formulaName"
          name="formulaName"
          onChange={handleSelect}
        >
          <option>Choose...</option>
          {formulaNames.map((formulaName) => (
            <option key={formulaName.id} value={formulaName.title}>
              {formulaName.title}
            </option>
          ))}
        </select>
      </div>

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="payer">
            Payer
          </label>
        </div>
        <select
          className="custom-select"
          id="payer"
          name="payer"
          onChange={handleSelect}
        >
          <option>Choose...</option>

          <option key={1} value={1}>
            Owner
          </option>
          <option key={2} value={2}>
            Resident
          </option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary m-2">
        Submit
      </button>
    </form>
  );
}

export default ExpenseTypeForm;
