import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

const CustomNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false); 

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrolled(scrollPosition > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeNav = () => {
    setExpanded(false);
  };

  return (
    <Navbar 
      fixed="top" 
      expand="lg" 
      className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}
      expanded={expanded} 
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-text" onClick={closeNav}> 
          Innova<span className='tex'>tex</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#" className="nav-link-custom wavy" onClick={closeNav}>
              Home
            </Nav.Link>
            <Nav.Link  href="#About" className="nav-link-custom wavy" onClick={closeNav}>
              About
            </Nav.Link>
            <Nav.Link href="#Team" className="nav-link-custom wavy" onClick={closeNav}>
              Our Team
            </Nav.Link>
            <Nav.Link href="#Contact" className="nav-link-custom wavy" onClick={closeNav}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;