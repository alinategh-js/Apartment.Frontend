import React, { useState, useEffect } from "react";
import { getExpenses } from "./expensesServices";
import Pagination from '../../common/pagination';


const Expenses = ()=>{
  const [expenses, setExpenses]=useState([])
  const [page, setPage]=useState(1)
  const [pages, setPages]=useState(5)

useEffect(()=>{
    
    setExpenses(getExpenses)
}, []);

  const handlePageSelect = (pagenum) => {
        // api call and get new expenses page from backend
        
            setPage(pagenum)
        }
        
  const handleDelete = (id) => {

    setExpenses(
      expenses.filter(((c) => c.id !== id))
    )
  };
      
  
  
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Type</th>
              <th scope="col">From</th>
              <th scope="col">To</th>
              <th scope="col">Amount</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((exp, index) => (
              <tr key = {exp.id}>
                <th>{index}</th>
                <td>{exp.title}</td>
                <td>{exp.type}</td>
                <td>{exp.from}</td>
                <td>{exp.to}</td>
                <td>{exp.amount}</td>
                <td>
        <button
          className="btn btn-warning m-2"
          onClick={() => handleDelete(exp.id)}
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
  }


export default Expenses;
