import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import app from '../../../Images/logo/app.png';
import play from '../../../Images/logo/play.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className='bg-dark text-light'>
            <Container className='py-5 px-5'>
                <Row>
                    <Col md="3">
                        <h2>Pages</h2>
                             <p>Home</p>
                            <p>About Me</p>
                            <p>Skills</p>
                            <p>Contact Us</p>
                        
                    </Col>
                    <Col md="3">
                        <h2>Contact us</h2>
                        <p>Phone : +8801888559287</p>
                        <p>Phone : +8801719228487</p>
                        <p>Email : mdsabbir477470@gmail.com</p>
                    </Col>
                    <Col md="6" className='py-1'>
                        <div>
                            <h4>App Store</h4>
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
                </Row>
                <div className='text-light text-center'>
                    <h5>Created By Dev || Sabbir 2023 All rights reserved ⌕</h5>
                </div>
            </Container>
        </div>
    );
};

export default Footer;