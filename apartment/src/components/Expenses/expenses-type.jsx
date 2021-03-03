import React, { useState, useEffect } from 'react';
import { getExpensesType } from "./expensesServices";
import Pagination from '../../common/pagination'

const ExpensesType =()=>{
const [expensesTypes, setExpensesTypes]= useState([])
const [page, setPage]=useState(1)
const [pages, setPages]=useState(5)

useEffect(() =>{
    setExpensesTypes(getExpensesType())
}, []);

    const handlePageSelect = (pagenum) => {
        // api call and get new expenses categories page from backend
        
            setPage(pagenum)
        };
    
        const handleDelete = (id) => {

            setExpensesTypes(
              expensesTypes.filter(((c) => c.id !== id))
            )
          };
     

        return ( 
            <>
                <table className ="table">
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
                        {expensesTypes.map((exp, index) => (
                        <tr key={exp.id}>
                            <th>{index}</th>
                            <td>{exp.title}</td>
                            <td>{exp.formula}</td>
                            <td>{exp.payer}</td>
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

 
export default ExpensesType;