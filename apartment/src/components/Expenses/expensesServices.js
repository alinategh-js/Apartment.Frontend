// ==== for fake data and API calls ====

import axios from "axios";

  
// export const getExpenses = () =>{
//     return [
//         {id: '1', title: 'Gas' , type: 'Gas Bill', from: '1399/03/01' , to: '1399/03/30' , amount: '100000'},
//         {id:'2', title: 'Electricity' , type: 'Electricity Bill', from: '1399/03/01' , to: '1399/03/30' , amount: '100000'},
//         {id:'3', title: 'Gas' , type: 'Gas Bill', from: '1399/03/01' , to: '1399/03/30' , amount: '100000'},
//         {id:'4', title: 'Gas' , type: 'Gas Bill', from: '1399/03/01' , to: '1399/03/30' , amount: '100000'}
//     ]
// }

export const getExpensesType = () =>{
    return [
        {id: '1', title: 'Gas Bill' , formula: 'By People'},
        {id: '2', title: 'Electricity Bill' , formula: 'By Area'}
    ]
}

const url = "http://193.151.128.227:5555/api/expenseTypes"
const options = {
    headers: {'Content-Type': 'application/json'}
};

export const getAllExpenseTypes = () => axios.get(url, {
    body: {
        page: 1,
        size: 5
    }
});

export const postExpenseType = (expenseType) => axios.post(url, expenseType, options);

export const deleteExpenseType = (expenseTypeId) => axios.delete(`${url}/${expenseTypeId}`);

export const getExpenses = () => axios.get(url, {
    body: {
        page: 1,
        size: 5
    }
});

export const deleteExpense = (expenseId) => axios.delete(`${url}/${expenseId}`);

export const postExpense = (expense) => axios.post(url, expense, options);