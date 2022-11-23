import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home"><h3 className='text-secondary'>Dev || Sabbir</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link to='/home'><h5 className='text-secondary'>Home</h5></Nav.Link>
            <Nav.Link to='/about'><h5 className='text-secondary'>About</h5></Nav.Link>
            <Nav.Link to='/about'><h5 className='text-secondary'>Skills</h5></Nav.Link>
            <Nav.Link to='/projects'><h5 className='text-secondary'>Projects</h5></Nav.Link>
            <Nav.Link to='/blogs'><h5 className='text-secondary'>Blogs</h5></Nav.Link>
            <Nav.Link to='/contact'><h5 className='text-secondary'>Contact</h5></Nav.Link>
          </Nav>  
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;