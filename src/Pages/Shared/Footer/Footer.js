import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import app from '../../../Images/logo/app.png';
import play from '../../../Images/logo/play.png';
import me from '../../../Images/logo/me.png'
import './Footer.css';
import { BsFillEmojiSmileFill, BsHeartHalf } from 'react-icons/bs';


const Footer = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '/' + mm + '/' + yyyy;
    return (
        <div className='bg-dark text-light'>
            <Container className='py-5 px-5'>
                <Row>
                    <Col md="3">
                        <h2>Pages</h2>
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
                        <img src={me} alt="aws" className='img-fluid'/>
                    </Col>
                </Row>
                <div className='text-light text-center'>
                    <h5>Created By Dev | bir <BsFillEmojiSmileFill className='text-warning'/>  <span className='text-primary'>{formattedToday}</span>  All rights reserved <BsHeartHalf className='text-danger'/></h5>
                </div>
            </Container>
        </div>
    );
};

export default Footer;