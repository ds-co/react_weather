import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const PublicNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="position-fixed navbar-fixed">
      <Navbar.Brand></Navbar.Brand>
      <Nav className="mr-auto"></Nav>
    </Navbar>
  );
};

export default PublicNavbar;
