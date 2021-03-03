import React, { useState, useEffect } from "react";
import { getExpenses, getExpensesType, postExpense } from "./expensesServices";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function ExpensesForm() {
  const [expenseTypes, setExpenseTypes] = useState([]);
  const [expenseType, setExpenseType] = useState({});
  const [from, setFrom] = useState(new Date());
  const [to, setTo] = useState(new Date());
  const [amount, setAmount] = useState(0);
  const [title, setTitle] = useState("");

  useEffect(async () => {
    setExpenseTypes(await getExpensesType());
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const expense = {
      title,
      from,
      to,
      amount,
      expenseType,
    };
    await postExpense(expense);
  };
  const handleChange = (e) => {
    const target = e.target;
    if (target.name === "title") setTitle(target.value);
    else if (target.name === "amount") setAmount(target.value);
  };

  const handleSelect = (event) => {
    let expenseType = event.target.value;
    setExpenseType(expenseType);
  };

  return (
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
        <label htmlFor="amount">Amount</label>
        <input
          type="text"
          className="form-control"
          id="amount"
          name="amount"
          value={amount}
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

        <select className="custom-select" id="expenseType" name="expenseType" value={expenseType} onChange={handleSelect}>
          <option>Choose...</option>
          {expenseTypes.map((extype) => (
            <option key={extype.id} value={extype.id}>
              {extype.title}
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
  );
}

export default ExpensesForm;
