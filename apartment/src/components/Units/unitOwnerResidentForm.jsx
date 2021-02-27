import React from 'react';

function UnitOwnerResidentForm(){

     
        return ( 
            <form>

                   

                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="resident">Resident</label>
                </div>
                <select className="custom-select" id="inputGroupSelect01">
                    <option selected>Choose...</option>
                    <option value="1">Mr Asadi</option>
                    <option value="2">Mr Imani</option>
                    <option value="3">Mis Ahmadi</option>
                    <option value="3">Mis Rezaii</option>
                </select>
                </div>

                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="owner">Owner</label>
                </div>
                <select className="custom-select" id="inputGroupSelect02">
                    <option selected>Choose...</option>
                    <option value="1">Faridi</option>
                    <option value="2">Ebrahimi</option>
                    <option value="3">Fardin</option>
                    <option value="3">Rahimi</option>
                    
                </select>
                </div>   
                   
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input type="text" className="form-control" id="Date"  placeholder="Enter date"></input>
                   
                </div>                        
               
                <button type="submit" className="btn btn-primary m-2">Submit</button>
            </form>
         );
    }


export default UnitOwnerResidentForm;