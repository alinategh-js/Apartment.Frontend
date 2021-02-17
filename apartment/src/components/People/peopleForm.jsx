import React, { Component } from "react";

class PeopleForm extends Component {
  state = {};

  peopleSubmitUrl = "";

  render() {
    return (
      <>
        <div>
          <form action={peopleSubmitUrl}>
            <div className="form-group">
              <label htmlFor=""></label>
              <input type="text" />
              <small></small>
            </div>
            <div className="form-group">
              <label htmlFor=""></label>
              <input type="text" />
              <small></small>
            </div>
            <button type="submit" className="btn btn-primary">
              Add Person
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default PeopleForm;
