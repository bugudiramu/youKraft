import React from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/');
  };
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand role='button' onClick={handleNavigate}>
          youKraft
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link onClick={handleNavigate}>Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
