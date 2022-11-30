import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import app from '../../../Images/logo/app.png';
import play from '../../../Images/logo/play.png';
import aws from '../../../Images/logo/aws.png'
import './Footer.css';


const Footer = () => {
    return (
        <div className='bg-dark text-light'>
            <Container className='py-5 px-5'>
                <Row>
                    <Col md="3">
                        <h2>Pages</h2>
                            <Link className='mx-3 nav-link' to='/homebanner'><h5 className='text-secondary'>Home</h5></Link>
                            <Link className='mx-3 nav-link' to='/about'><h5 className='text-secondary'>About</h5></Link>
                            <Link className='mx-3 nav-link' to='/skills'><h5 className='text-secondary'>Skills</h5></Link>
                            <Link className='mx-3 nav-link' to='/projects'><h5 className='text-secondary'>Projects</h5></Link>
                            <Link className='mx-3 nav-link' to='/blogs'><h5 className='text-secondary'>Blogs</h5></Link>
                            <Link className='mx-3 nav-link' to='/contact'><h5 className='text-secondary'>Contact</h5></Link>      
                    </Col>
                    <Col md="3">
                        <h2>Contact us</h2>
                        <p>Phone : +8801888559287</p>
                        <p>Phone : +8801719228487</p>
                        <p>Email : mdsabbir477470@gmail.com</p>
                    </Col>
                    <Col md="3" className='py-1'>
                        <div>
                            <h4 className='mx-5'>Store Choose</h4>
                        </div>
                        <Row>
                            <Col md="12">
                                <img src={app} height="50px" alt='' className='app' />
                            </Col>
                            <Col md="12">
                                <img src={play} height="50px" alt='' className='play' />
                            </Col>
                        </Row>
                    </Col>
                    <Col md="3">
                        <img src={aws} alt="aws" className='img-fluid'/>
                    </Col>
                </Row>
                <div className='text-light text-center'>
                    <h5>Created By Dev || bir 2023 All rights reserved ⌕</h5>
                </div>
            </Container>
        </div>
    );
};

export default Footer;