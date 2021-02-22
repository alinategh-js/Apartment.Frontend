import React, { Component } from 'react';

class UnitForm extends Component {
    state = {  }
    render() { 
        return ( 
            <form>
                <div className="form-group">
                    <label htmlFor="unitnumber">Unit Number</label>
                    <input type="text" className="form-control" id="unitnumber"  placeholder="Enter unitNumer"></input>
                   
                </div>
                <div className="form-group">
                    <label htmlFor="Area">Area</label>
                    <input type="text" class="form-control" id="area" placeholder="Enter area of unit"></input>
                     <small id="area" class="form-text text-muted">Enter unit area by meters.</small>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
         );
    }
}

export default UnitForm;