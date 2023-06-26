import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" sticky="top">
      <Navbar.Brand href="#home">Your Website</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ml-auto ">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#flora">Flora</Nav.Link>
          <Nav.Link href="#fauna">Fauna</Nav.Link>
          <Nav.Link href="#footer">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
