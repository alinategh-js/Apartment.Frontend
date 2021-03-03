import React, { useState, useEffect } from "react";
import { getExpensesType, postExpenseType } from "./expensesServices";

function ExpenseTypeForm() {
  const [formulaTypes, setFormulaTypes] = useState([]);
  const [name, setName] = useState("");
  const [formulaName, setFormulaName] = useState("");
  const [payer, setPayer] = useState("");

  useEffect(async () => {
    //let {data} = await getExpensesType();
    setFormulaTypes(await getExpensesType());
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let expenseType = {
      name,
      formulaName,
    };
    await postExpenseType(expenseType);
  };

  const handleChange = (e) => {
    let target = e.target;
    setName(target.value);
  };

  const handleSelect = (event) => {
    let target = event.target;
    if (target.name === "payer") setPayer(target.value);
    else if (target.name === "formulaName") setFormulaName(target.value);
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
          value={name}
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
          value={formulaName}
        >
          <option>Choose...</option>
          {formulaTypes.map((formulaType) => (
            <option key={formulaType.id} value={formulaType.id}>
              {formulaType.title}
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
          value={payer}
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
