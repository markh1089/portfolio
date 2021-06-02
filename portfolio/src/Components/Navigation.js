import React from "react";
import { Nav, Navbar} from "react-bootstrap";
import logo from "../logo.png"



function Navigation() {
    return (
<Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="#home"> <img src={logo} className="logo" alt="logo..."/>Mark Hempel - Web Developer</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
    </Nav>

  </Navbar.Collapse>
</Navbar>
    )
}

export default Navigation
