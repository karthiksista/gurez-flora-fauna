import React from "react";
import { Navbar } from "react-bootstrap";
import logo from "../assets/shina.png";

const CustomNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top">
      <Navbar.Brand href="#home">
        <img alt="logo" src={logo} width="100" height="50" />
        Shina Cultural Center
      </Navbar.Brand>
      {/* <Navbar.Brand href="#home">Shina Cultural Center</Navbar.Brand> */}
    </Navbar>
  );
};

export default CustomNavbar;
