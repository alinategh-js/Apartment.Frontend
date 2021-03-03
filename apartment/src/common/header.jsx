import React from "react";
import { Link } from "react-router-dom";
import AddButton from "./add-button";

import './header.css'

const Header = ({showModal}) => {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        data-toggle="collapse"
      >
        <div className='navbar-collapse'>
          <ul className="navbar-nav mr-auto">
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
          <AddButton showModal={showModal}/>
        </div>
      </nav>
    );
};

export default Header;
