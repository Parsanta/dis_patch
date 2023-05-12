import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../assets/img/Logo.svg";
import cart from "../assets/img/cart-img.svg";

export const NavBar=()=> {
  return (
    <Navbar  expand="md">
      <Container>
        <Navbar.Brand href="/"><img src={Logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto flex-nowrap">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/service">Services</Nav.Link>           
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/cart"><img src={cart} style={{ width: "35px" }}/></Nav.Link>
            <Button variant="danger" size="md" href='/contact'>Contact</Button>                
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

