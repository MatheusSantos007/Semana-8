import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css"; 

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {}
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            {}
            <Nav.Link as={Link} to="/sobre">
              Sobre
            </Nav.Link>
            {}
            <Nav.Link as={Link} to="/institutions">
              Instituições de Ensino
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;