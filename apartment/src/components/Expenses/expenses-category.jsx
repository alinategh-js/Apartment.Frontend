import React, { Component } from 'react';
import { getExpensesCategories } from "./expensesServices";
import Pagination from '../../common/pagination'

class ExpensesCategory extends Component {
    state = { 
        expensesCategories: [],
        page: 1,
        pages: 6
     }

    componentDidMount= async () => {
        const newExpenseCat = await getExpensesCategories();
        // todo: get how many pages
        this.setState({
            expensesCategories: newExpenseCat
        })
    }

    handlePageSelect = (pagenum) => {
        // api call and get new expenses categories page from backend
        this.setState({
            page: pagenum
        })
    }

    render() { 
        const {expensesCategories, pages, page} = this.state;
        return ( 
            <>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Formula</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expensesCategories.map((exp, index) => (
                        <tr>
                            <th>{index}</th>
                            <td>{exp.title}</td>
                            <td>{exp.formula}</td>
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
 
export default ExpensesCategory;