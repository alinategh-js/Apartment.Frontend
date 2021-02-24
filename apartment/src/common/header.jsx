import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddButton from "./add-button";

import './header.css'

class Header extends Component {
  state = {};

  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark flex-column flex-md-row bd-navbar"
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
                className="nav-link"
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
          <AddButton/>
        </div>
      </nav>
    );
  }
}

export default Header;
