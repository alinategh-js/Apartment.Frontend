import React, { Component } from "react";
import { getExpenses } from "./expensesServices";
import Pagination from '../../common/pagination';

class Expenses extends Component {
  state = {
      expenses: [],
      pages: 6,
      page: 1
  };

  componentDidMount = async () =>{
      const newExpenses = await getExpenses();
      this.setState({
        expenses: newExpenses
      })
  }

  handlePageSelect = (pagenum) => {
        // api call and get new expenses page from backend
        this.setState({
            page: pagenum
        })
    }

  render() {
    //const expenses = getExpenses();
    const {expenses, page, pages} = this.state;
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
            onPageSelect={(pagenum) => this.handlePageSelect(pagenum)}
        />
      </>
    );
  }
}

export default Expenses;
