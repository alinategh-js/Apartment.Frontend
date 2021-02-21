import React, { Component } from 'react';

class ExpensesForm extends Component {
    state = {  }
    render() { 
        return ( 
            <form>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title"  placeholder="Enter title"></input>
                   
                </div>
                <div className="form-group">
                    <label htmlFor="from">From</label>
                    <input type="text" class="form-control" id="from" placeholder="Date"></input>
                </div>
                
                <div className="form-group">
                    <label htmlFor="to">To</label>
                    <input type="text" class="form-control" id="to" placeholder="Date"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input type="text" class="form-control" id="amount" placeholder="$"></input>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
         );
    }
}

export default ExpensesForm;