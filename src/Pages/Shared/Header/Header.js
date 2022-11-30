import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand><Link className='mx-3 nav-link' to='/'><h3 className='text-secondary'>Dev || bir</h3></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link className='mx-3 nav-link' to='/'><h5 className='text-secondary'>Home</h5></Link>
            <Link className='mx-3 nav-link' to='/'><h5 className='text-secondary'>About</h5></Link>
            <Link className='mx-3 nav-link' to='/'><h5 className='text-secondary'>Skills</h5></Link>
            <Link className='mx-3 nav-link' to='/'><h5 className='text-secondary'>Projects</h5></Link>
            <Link className='mx-3 nav-link' to='/'><h5 className='text-secondary'>Blogs</h5></Link>
            <Link className='mx-3 nav-link' to='/'><h5 className='text-secondary'>Contact</h5></Link>
          </Nav>  
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;