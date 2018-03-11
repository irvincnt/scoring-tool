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
      </nav>
    )
  }
}

export default Nav