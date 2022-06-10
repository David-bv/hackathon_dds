import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import {FiShoppingCart} from 'react-icons/fi'

const Header = () => {
  return (
    <>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">La tiendita</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Productos</Nav.Link>
      <Nav.Link href="#pricing"> ----- </Nav.Link>      
    </Nav>
    <Nav>
      <FiShoppingCart/>
      <Nav.Link href="#deets">Carrito de compras  <FiShoppingCart/></Nav.Link>  
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>


</>
  )
}

export default Header