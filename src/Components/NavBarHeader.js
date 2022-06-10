import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import {FiShoppingCart} from 'react-icons/fi'
import ShopingCard from './ShopingCard';

const Header = ({productos}) => {
 
  function handleHover(){
    const shopingCart = document.querySelector('.shoping-cart')
    if(shopingCart.classList.contains('closed')){
      shopingCart.classList.remove('closed')
      shopingCart.classList.add('open')
    } else {
      shopingCart.classList.remove('open')
      shopingCart.classList.add('closed')
    }

  }

  return (
    <>
<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand href="#home">La tiendita</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Productos</Nav.Link>
         
    </Nav>
    <Nav>
    
      <Nav.Link href="#deets" onClick={handleHover}>Carrito de compras<FiShoppingCart/></Nav.Link>  
      <ShopingCard productos={productos} />
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>


</>
  )
}

export default Header