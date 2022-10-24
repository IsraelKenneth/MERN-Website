import React from 'react'
import { Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../index.css'; 

const Header = () => {
  return (
    <div>    
    <Navbar bg="dark" variant= "dark" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">New-Yorkers</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/cart"><i class="fa-solid fa-cart-shopping"></i> Cart</Nav.Link>
            <Nav.Link href="/login">Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header

