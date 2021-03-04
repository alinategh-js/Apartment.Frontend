import React, { useState, useEffect } from "react";
import { deleteExpenseType, getAllExpenseTypes, getExpenseTypesByPage } from "./expensesServices";
import Pagination from "../../common/pagination";

const ExpenseType = () => {
  const [expenseTypes, setExpenseTypes] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(5);
  const [size, setSize] = useState(5);

  useEffect(async () => {
    const { data } = await getExpenseTypesByPage(page, size)
    setExpenseTypes(data.expenseTypes);
    setPages(data.totalPages)
  }, []);

  const handlePageSelect = async (pagenum) => {
    // api call and get new expenses categories page from backend
    const { data } = await getExpenseTypesByPage(page, size)
    setExpenseTypes(data.expenseTypes)
    setPage(pagenum);
  };

  const handleDelete = async (id) => {
    console.log(id)
    await deleteExpenseType(id)
    setExpenseTypes(expenseTypes.filter((c) => c.expenseTypeId !== id));
  };

  return (
    <>
    <h1>Expense Types</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Formula</th>
            <th scope="col">Payer</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {expenseTypes.map((expenseType, index) => (
            <tr key={expenseType.expenseTypeId}>
              <th>{index}</th>
              <td>{expenseType.name}</td>
              <td>{expenseType.formulaName}</td>
              <td>{expenseType.forOwner ? "Owner" : "Resident"}</td>
              <td>
                <button
                  className="btn btn-warning m-2"
                  onClick={() => handleDelete(expenseType.expenseTypeId)}
                >
                  Del
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        pages={pages}
        currentPage={page}
        onPageSelect={(pagenum) => handlePageSelect(pagenum)}
      />
    </>
  );
};

export default ExpenseType;
