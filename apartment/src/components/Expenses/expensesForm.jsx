import React, { useState, useEffect } from "react";
import { getAllExpenseTypes, getExpenseTypesByPage, postExpense } from "./expensesServices";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function ExpensesForm() {
  const [expenseTypes, setExpenseTypes] = useState([]);
  const [expenseTypeId, setExpenseTypeId] = useState(-1);
  const [from, setFrom] = useState(new Date());
  const [to, setTo] = useState(new Date());
  const [cost, setCost] = useState(0);
  const [title, setTitle] = useState("");

  useEffect(async () => {
    const { data } = await getAllExpenseTypes();
    setExpenseTypes(data);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const expense = {
      title,
      categoryId : parseInt(expenseTypeId),
      from : from.toISOString(),
      to: to.toISOString(),
      cost: parseInt(cost),
    };
    console.log(expense)
    await postExpense(expense);
  };
  const handleChange = (e) => {
    const target = e.target;
    if (target.name === "title") setTitle(target.value);
    else if (target.name === "cost") setCost(target.value);
  };

  const handleSelect = (event) => {
    let expenseTypeId = event.target.value;
    setExpenseTypeId(expenseTypeId);
    console.log(expenseTypeId)
  };

  return (
    <>
    <h1>Add New Expense</h1>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={title}
          placeholder="Enter title"
          onChange={handleChange}
        ></input>
      </div>

      <div className="form-group">
        <label htmlFor="cost">Cost</label>
        <input
          type="number"
          className="form-control"
          id="cost"
          name="cost"
          value={cost}
          placeholder="$"
          onChange={handleChange}
        ></input>
      </div>

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label
            className="input-group-text"
            htmlFor="expenseType"
          >
            Expense Type
          </label>
        </div>

        <select className="custom-select" id="expenseTypeId" name="expenseTypeId" value={expenseTypeId} onChange={handleSelect}>
          <option>Choose...</option>
          {expenseTypes.map((expenseType, index) => (
            <option key={index} value={expenseType.expenseTypeId}>
              {expenseType.name}
            </option>
          ))}
        </select>
      </div>
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
    </>
  );
}

export default ExpensesForm;
