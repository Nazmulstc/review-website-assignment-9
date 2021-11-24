import React from "react";
import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import "./MenuBar.css";

const MenuBar = () => {
  return (
    <div className="MenuBar-container">
      <Navbar bg="primary" variant="dark">
        <Container>
          <NavbarBrand className="col-md-5 d-flex align-items-center" to="Home">
            <img className="w-25" src={logo} alt="" />
            <h3>
              <NavLink className="logo-style" to="Home">
                NR Teaching
              </NavLink>
            </h3>
          </NavbarBrand>
          <Nav className="ms-auto col-md-7">
            <NavLink className="items" to="Home">
              Home
            </NavLink>
            <NavLink className="items" to="Courses">
              Courses
            </NavLink>
            <NavLink className="items" to="Pricing">
              Pricing
            </NavLink>
            <NavLink className="items" to="About">
              About Us
            </NavLink>
            <NavLink className="items" to="Contact">
              Contact Us
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default MenuBar;
