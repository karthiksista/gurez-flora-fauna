import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../assets/shina.png";

const CustomNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top">
      <Navbar.Brand href="#home">
        <img alt="logo" src={logo} width="100" height="50" />
        Shina Cultural Center
      </Navbar.Brand>
      {/* <Navbar.Brand href="#home">Shina Cultural Center</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ml-auto ">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
