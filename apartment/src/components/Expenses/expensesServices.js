// ==== for fake data and API calls ====

export const getExpenses = () =>{
    return [
        {title: 'Gas' , type: 'Gas Bill', from: '1399/03/01' , to: '1399/03/30' , amount: '100000'},
        {title: 'Electricity' , type: 'Electricity Bill', from: '1399/03/01' , to: '1399/03/30' , amount: '100000'},
        {title: 'Gas' , type: 'Gas Bill', from: '1399/03/01' , to: '1399/03/30' , amount: '100000'},
        {title: 'Gas' , type: 'Gas Bill', from: '1399/03/01' , to: '1399/03/30' , amount: '100000'}
    ]
}

export const getExpensesCategories = () =>{
    return [
        {title: 'Gas Bill' , formula: 'By People'},
        {title: 'Electricity Bill' , formula: 'By Area'}
    ]
}

