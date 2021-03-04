import axios from "axios";


const url = "http://193.151.128.227:5555/api"
const options = {
    headers: {'Content-Type': 'application/json'}
};

export const getExpenseTypesByPage = (page, size) => axios.get(`${url}/expenseTypes`, {
    params: {
        page,
        size
    }
});

export const postExpenseType = (expenseType) => axios.post(`${url}/expenseTypes`, expenseType, options);

export const deleteExpenseType = (expenseTypeId) => axios.delete(`${url}/expenseTypes/${expenseTypeId}`);

export const getExpensesByPage = (page, size) => axios.get(`${url}/expenses`, {
    params: {
        page,
        size
    }
});

export const deleteExpense = (expenseId) => axios.delete(`${url}/expenses/${expenseId}`);

export const postExpense = (expense) => axios.post(`${url}/expenses`, expense, options);

export const getFormulas = () => axios.get(`${url}/expenseTypes/formulas`);