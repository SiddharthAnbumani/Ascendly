import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';


export const MakeNavbar = () => {
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>Ascendly</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/new'>New</Nav.Link>
            <Nav.Link as={Link} to='/show'>All</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

