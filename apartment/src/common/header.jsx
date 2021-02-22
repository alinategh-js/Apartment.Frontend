import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  state = {};

  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light flex-column flex-md-row bd-navbar"
        data-toggle="collapse"
      >
        <div className="navbar-nav-scroll">
          <ul className="navbar-nav bd-navbar-nav flex-row">
            <li className="nav-item">
              <Link
                className="nav-link "
                to='/'
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to='/units'
              >
                Units
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link "
                to='/people'
              >
                People
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to='/charges'
              >
                Charges
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/expenses"
              >
                Expenses
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
