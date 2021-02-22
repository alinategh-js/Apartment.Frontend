import React, { Component } from "react";

class PersonForm extends Component {
  state = {  }
    render() { 
        return ( 
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="Name"  placeholder="Enter Name"></input>
                   
                </div>
                <div className="form-group">
                    <label htmlFor="phonenumber">PhoneNumber</label>
                    <input type="text" class="form-control" id="phonenumber" placeholder="09---------"></input>
                </div>
                
               <button type="submit" className="btn btn-primary">Submit</button>
            </form>
         );
    }
}


export default PersonForm;
