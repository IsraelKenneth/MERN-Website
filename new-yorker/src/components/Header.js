import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../index.css'; 
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>    
    <Navbar bg="dark" variant= "dark" expand="lg" collapseOnSelect>
      <Container>
          <LinkContainer to="/">
            <Navbar.Brand>New-Yorkers</Navbar.Brand>
          </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link><i className="fa-solid fa-cart-shopping"></i> Cart</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>Sign In</Nav.Link>
              </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header

