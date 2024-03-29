import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsChevronLeft, BsChevronRight} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
      <div id='home'>
        <Navbar className='nav-ber' collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand><Link className='mx-3 nav-link' to='/'><h2 className='text-secondary'><strong><marquee behavior="left" direction=""><b><BsChevronLeft />SABBIR /<BsChevronRight /></b></marquee></strong></h2></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto my-nav">
                <a className='menu-link' href="#home"><h5 className='mx-2 nav-link text-secondary'>Home</h5>
                </a>

                <a className='menu-link' href="#about"><h5 className='mx-2 nav-link text-secondary'>About</h5>
                </a>

                <a className='menu-link' href="#skills"><h5 className='mx-2 nav-link text-secondary'>Skills</h5>
                </a>

                <a className='menu-link' href="#projects"><h5 className='mx-2 nav-link text-secondary'>Projects</h5>
                </a>

                <a className='menu-link' href="#blogs"><h5 className='mx-2 nav-link text-secondary'>Blogs</h5>
                </a>
                
                <a className='menu-link' href="#contact"><h5 className='mx-2 nav-link text-secondary'>Contact</h5>
                </a>
                <a href="sabbir-hossain.pdf" download='sabbir-hossain.pdf'><button type='submit' className='btn btn-sm btn-warning mx-2 my-1 fs-5 menu-link'>Resume</button></a>
            </Nav>  
          </Navbar.Collapse>
        </Container>
        </Navbar>
      </div>
    );
};

export default Header;