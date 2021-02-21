import React, { Component } from 'react';

class UnitForm extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <form>
                    <div className="form-group">
                        <label html="unitnumber">Unit Number</label>
                        <input type="text"  id="unitnumber"  ></input>
                        <small></small>
                    </div>
                    <div className="form-group">
                        <label htmlfor="owner">Owner</label>
                        <input type="text"  id="owner" ></input>
                    </div>
                    
                    <div className="form-group">
                        <label htmlfor="resident">Resident</label>
                        <input type="text"  id="resident" ></input>
                    </div>

                    <div className="form-group">
                        <label htmlfor="area">Area</label>
                        <input type="text"  id="area" ></input>
                    </div>


                    
                    <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </>
         );
    }
}

export default UnitForm;