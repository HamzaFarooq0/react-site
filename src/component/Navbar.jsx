import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="#home" style={{padding: '10px', marginLeft: '15px', fontSize: '2.0rem'}}>Bootcamp-2020</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link style={{marginRight: '50px', fontSize: '1.4rem'}} href="#home">Home</Nav.Link>
          <Nav.Link style={{marginRight: '50px', fontSize: '1.4rem'}} href="#link">About</Nav.Link>
          <Nav.Link style={{marginRight: '50px', fontSize: '1.4rem'}} href="#link">Contact us</Nav.Link>
          <Nav.Link style={{marginRight: '50px', fontSize: '1.4rem'}} href="#link">Projects</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
