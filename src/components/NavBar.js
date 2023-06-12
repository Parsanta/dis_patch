import React, { useContext } from 'react';
import { CartContext } from '../App';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../assets/img/Logo.svg";
import cart from "../assets/img/cart-img.svg";

export const NavBar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand href="/"><img src={Logo} alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto flex-nowrap">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/service">Services</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/cart">
              <div className="cart-icon-container">
                <img src={cart} alt="Cart" className="cart-icon" />
                {cartItems.length > 0 && (
                  <div className="cart-count">{cartItems.length}</div>
                )}
              </div>
            </Nav.Link>
            <Button variant="danger" size="md" href="/contact">Contact</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
