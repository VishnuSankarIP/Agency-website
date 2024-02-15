import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'


function Header() {
  return (
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home"><i class="fa-solid fa-chart-simple me-2"></i>Nexcent</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Service</Nav.Link>
            <Nav.Link href="#pricing">Feature</Nav.Link>
            <Nav.Link href="#pricing">Product</Nav.Link>
            <Nav.Link href="#pricing">Testimonial</Nav.Link>
            <Nav.Link href="#pricing">FAQ</Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
          <Nav.Link href="#pricing" className='d-flex justify-content-center mt-2'>Login</Nav.Link>
          <button className='ms-2 rounded ' style={{ backgroundColor: '#4CAF4F', width: '80px', color: 'white', height: '50px', border: 'none' }}>Sign up</button>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Header