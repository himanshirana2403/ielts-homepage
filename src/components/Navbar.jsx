import React from "react";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import "./Navbar.css";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="navbar-custom sticky-top py-3">
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand href="#" className="fw-bold fs-3">
          IELTS Pro
        </Navbar.Brand>

        {/* Navbar Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#home" className="nav-link-custom active">
              Home
            </Nav.Link>

            {/* Courses Dropdown */}
            <NavDropdown title="Courses" id="courses-dropdown" className="nav-link-custom">
              <NavDropdown.Item href="#speaking">Speaking Practice</NavDropdown.Item>
              <NavDropdown.Item href="#mock-tests">Mock Tests</NavDropdown.Item>
              <NavDropdown.Item href="#ai-band-score">AI Band Score</NavDropdown.Item>
              <NavDropdown.Item href="#writing">Writing & Reading Modules</NavDropdown.Item>
            </NavDropdown>

            {/* Testimonials Section */}
            <Nav.Link href="#testimonials" className="nav-link-custom">
              Testimonials
            </Nav.Link>

            {/* Contact Section */}
            <Nav.Link href="#contact" className="nav-link-custom">
              Contact
            </Nav.Link>

            {/* Get Started Button */}
            <Button variant="primary" className="contact-btn">Get Started</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
