import React, { Component } from 'react';

function ExpenseTypeForm (){
 
        return ( 
            <form>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title"  placeholder="Enter title"></input>
                   
                </div>
                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="formulatype">Formula Type</label>
                </div>
                <select className="custom-select" id="inputGroupSelect01">
                    <option selected>Choose...</option>
                    <option value="1">fix</option>
                    <option value="2">by People</option>
                    <option value="3">by Area</option>
                    <option value="3">by People and Area</option>
                </select>
                </div>                              
               
                <button type="submit" className="btn btn-primary m-2">Submit</button>
            </form>
         );
    }


export default ExpenseTypeForm;