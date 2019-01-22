import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import api from "../../api";
import { Route, Link, NavLink } from "react-router-dom";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleLogoutClick(e) {
    api.logout();
  }

  render() {
    return (
      <div>
        <Navbar className="text-success" light expand="md">
          <NavbarBrand href="/">
            <NavLink to="/" exact />
            BA Properties
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/countries">Find a property</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/add-country">List a property</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/">Other Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/">Contact us</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
