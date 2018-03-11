import React, { Component } from 'react'
//import { Navbar, NavbarBrand } from 'reactstrap' 

const divMargin = {
  margin: '15px 0px 15px 0'
};

class Nav extends Component {
  render () {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light" style={divMargin}>
        <a class="navbar-brand" href="#">Gendly</a>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Prospects <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Recruited</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Grafics</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav