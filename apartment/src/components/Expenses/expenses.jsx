import React, { useState, useEffect } from "react";
import { getExpenses } from "./expensesServices";
import Pagination from '../../common/pagination';


const Expenses = ()=>{
  const [expenses, setExpenses]=useState([])
  const [page, setPage]=useState(1)
  const [pages, setPages]=useState(5)

// class Expenses extends Component {
//   state = {
//       expenses: [],
//       pages: 6,
//       page: 1
//   };
useEffect(()=>{
    
    setExpenses(getExpenses)
}, []);
  // componentDidMount = async () =>{
  //     const newExpenses = await getExpenses();
  //     this.setState({
  //       expenses: newExpenses
  //     })
  // }

  const handlePageSelect = (pagenum) => {
        // api call and get new expenses page from backend
        
            setPage(pagenum)
        
    }

  
    //const expenses = getExpenses();
    // const {expenses, page, pages} = this.state;
    return (
      <>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Type</th>
              <th scope="col">From</th>
              <th scope="col">To</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((exp, index) => (
              <tr>
                <th>{index}</th>
                <td>{exp.title}</td>
                <td>{exp.type}</td>
                <td>{exp.from}</td>
                <td>{exp.to}</td>
                <td>{exp.amount}</td>
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
