import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub, BsDownload, BsChatSquareDotsFill, BsGlobe, BsMedium } from "react-icons/bs";
import me from '../../../Images/logo/smait.png';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import './HomeTop.css';

const HomeTop = () => {
    const [text] = useTypewriter({
        words: ['Full Stack...','Web Developer.💻', 'Programmer.💻', 'Sab | Bir 💻', 'Web Developer💻', 'Software Engineer.', 'Coder 💻'],
        loop: Infinity,
        onLoopDone: () => console.log(`loop completed after Infinity runs.`)
    })
      
    return (
        <div className='home-Banner p-1' id='home'>
            <div className="position-fixed fixed-bottom text-end me-4 mb-4">
                  <a href="#home">
                      <img className='img-fluid go-to-top-icon' src='https://icon-library.com/images/back-to-top-icon-png/back-to-top-icon-png-7.jpg' alt="back-to-top-icon" />
                  </a>
              </div>
            <div className='position-relative w-100 h-100 home-top'>
                {/* <HomeBanner /> */}
            </div>
            <Container className='mt-5 my-5'>
                <Row>
                    <Col md="6" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <div className=''>
                            <p className='fs-5'>Hey, <span><strong className='text-success'>Let's get to know me.</strong></span> I'm </p>
                            <h1 className='sabbir'>Sabbir Hossain</h1>     
                            <span className='fs-2 mt-5 text-cursor'>I'm  <span style={{ color: 'crimson'}}>{text}</span></span>
                            <Cursor cursorColor='red' />
                            <p className='text-dark fs-5 mt-2'>I am a hardworking, confident, enthusiastic Web developer and I want to utilize my knowledge and personal skills in full stack Web Development.</p>

                            <div className='social-link text-center my-2'>
                                <h2 className='social-h2'><a href="https://dev-sabbir.web.app"><BsGlobe className='text-primary'/></a></h2>

                                <h2 className='social-h2'><a href="https://github.com/sabbirvai"><BsGithub className='text-secondary'/></a></h2> 

                                <h2 className='social-h2'><a href="https://www.linkedin.com/in/md-sabbir-hossain-18300b244/"><BsLinkedin className='text-primary' /></a></h2>
                                
                                <h2 className='social-h2'><a href="https://medium.com/@sabbirhossain_37022"><BsMedium className='text-dark'/></a></h2>
                                   
                                <h2 className='social-h2'><a href="https://www.facebook.com/profile.php?id=100066520511940"><BsFacebook className='text-primary'/></a></h2>

                                <h2 className='social-h2'><a href="https://www.instagram.com/dev__sabbir/?fbclid=IwAR0cozEZJSlO_1JIYXtcbxKAPDnTkJ2NDZR9VZCO4m0K8SyknAL3Se-7mqs"><BsInstagram className='text-danger'/></a></h2>
                            </div>
                            <div className='d-flex justify-content-start text-center'>
                                <Button size="sm" variant="warning" className='mt-4'><a href="#contact" className='text-black github'>Hire me <BsChatSquareDotsFill /></a></Button>
                                <a className='resume mx-4' href="sabbir-hossain.pdf" download='sabbir-hossain.pdf'><Button variant="outline-primary" size="sm" className='mt-4'>Download Resume <BsDownload /></Button></a> 
                            </div>      
                        </div>
                    </Col>
                    <Col md="6">
                        <img src={me} alt="img top" className='sabbir-img img-fluid mt-1' data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomeTop;