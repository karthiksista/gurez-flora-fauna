import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top">
      <Navbar.Brand href="#home">Shina Cultural Center</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ml-auto ">
          <Nav.Link href="#home">Home</Nav.Link>
          <NavDropdown title="Flora" id="basic-nav-dropdown">
            <NavDropdown.Item href="#mountain-trees">
              Mountain Trees
            </NavDropdown.Item>
            <NavDropdown.Item href="#mountain-shrubs">
              Mountain Shrubs
            </NavDropdown.Item>
            <NavDropdown.Item href="#medicinal-herbs">
              Medicinal Herbs
            </NavDropdown.Item>
            <NavDropdown.Item href="#wild-ornamentals">
              Wild Ornamentals
            </NavDropdown.Item>
            <NavDropdown.Item href="#grasses">
              Mountain Grasses
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#fauna">Fauna</Nav.Link>
          <Nav.Link href="#footer">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
