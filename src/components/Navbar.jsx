import React from "react";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import "./Navbar.css";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="navbar-custom sticky-top py-3">
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand href="#" className="fw-bold fs-3">
          INTELION
        </Navbar.Brand>

        {/* Navbar Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#home" className="nav-link-custom active">
              Home
            </Nav.Link>

            {/* SaaS & IT Solutions Dropdown */}
            <NavDropdown title="Solutions" id="solutions-dropdown" className="nav-link-custom">
              <NavDropdown.Item href="#saas-platforms">SaaS Platforms</NavDropdown.Item>
              <NavDropdown.Item href="#cloud-services">Cloud Services</NavDropdown.Item>
              <NavDropdown.Item href="#ai-solutions">AI & Automation</NavDropdown.Item>
              <NavDropdown.Item href="#cybersecurity">Cybersecurity</NavDropdown.Item>
            </NavDropdown>

            {/* Industries Served */}
            <NavDropdown title="Industries" id="industries-dropdown" className="nav-link-custom">
              <NavDropdown.Item href="#finance-tech">FinTech</NavDropdown.Item>
              <NavDropdown.Item href="#health-it">Healthcare IT</NavDropdown.Item>
              <NavDropdown.Item href="#edtech">EdTech</NavDropdown.Item>
              <NavDropdown.Item href="#enterprise">Enterprise Solutions</NavDropdown.Item>
            </NavDropdown>

            {/* Insights Section */}
            <NavDropdown title="Insights" id="insights-dropdown" className="nav-link-custom">
              <NavDropdown.Item href="#blogs">Blogs</NavDropdown.Item>
              <NavDropdown.Item href="#case-studies">Case Studies</NavDropdown.Item>
              <NavDropdown.Item href="#market-research">Market Trends</NavDropdown.Item>
            </NavDropdown>

            {/* About Intelion */}
            <NavDropdown title="Company" id="company-dropdown" className="nav-link-custom">
              <NavDropdown.Item href="#about">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#team">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="#careers">Careers</NavDropdown.Item>
              <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
            </NavDropdown>

            {/* Client Support */}
            <Nav.Link href="tel:0612-2500971" className="client-support">
              <span>Support:</span> 0612-2500971
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
