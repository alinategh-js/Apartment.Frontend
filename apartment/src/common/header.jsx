import React, { Component } from "react";

class Header extends Component {
  state = {};

  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light flex-column flex-md-row bd-navbar"
        data-toggle="collapse"
      >
        <div class="navbar-nav-scroll">
          <ul class="navbar-nav bd-navbar-nav flex-row">
            <li class="nav-item">
              <a
                class="nav-link "
                href="/"
                onclick="ga('send', 'event', 'Navbar', 'Community links', 'Expo');"
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                href="#"
                onclick="ga('send', 'event', 'Navbar', 'Community links', 'Expo');"
              >
                Units
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link "
                href="#"
                onclick="ga('send', 'event', 'Navbar', 'Community links', 'Expo');"
              >
                People
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                onclick="ga('send', 'event', 'Navbar', 'Community links', 'Expo');"
                target="_blank"
                rel="noopener"
              >
                Charges
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                onclick="ga('send', 'event', 'Navbar', 'Community links', 'Expo');"
                target="_blank"
                rel="noopener"
              >
                Expenses
              
              
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
