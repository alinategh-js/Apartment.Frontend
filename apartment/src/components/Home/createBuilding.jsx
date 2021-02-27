import React from 'react';

function CreateBuilding() {



     
        return ( 
            <form>
                <div className="form-group">
                    <label htmlFor="buildingname">Building Name</label>
                    <input type="text" className="form-control" id="bildingname"  placeholder="Enter the building name"></input>
                   
                </div>
                <div className="form-group">
                    <label htmlFor="Number Of Units">Number Of Units</label>
                    <input type="text" className="form-control" id="numberofunits" placeholder="Enter number of units"></input>
                     
                </div>
                
                <button type="submit" className="btn btn-primary " >Submit</button>
            </form>
         );
    }


export default CreateBuilding;