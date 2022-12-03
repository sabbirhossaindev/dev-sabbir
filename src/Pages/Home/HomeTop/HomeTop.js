import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub, BsDownload, BsChatSquareDotsFill, BsGlobe } from "react-icons/bs";
import aws from '../../../Images/logo/aws.png'
// import HomeBanner from '../HomeBanner/HomeBanner';
import Typewriter from 'typewriter-effect';
import './HomeTop.css';

const HomeTop = () => {
    return (
        <div className='home-Banner p-5' id='home'>
            <div className='position-relative w-100 h-100 home-top'>
                {/* <HomeBanner /> */}
            </div>
            <Container className='mt-5 my-5'>
                <Row>
                    <Col md="6" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <div className=''>
                            <h1>Hi, I'm</h1>
                            <h1 className='sabbir'>Sabb<span>&iuml;</span>r Hossain</h1>     
                            <h2 className='mt-4 my-3 type-writer'>I am <span><Typewriter
                            className='options'
                            options={{
                                strings: ["CEO & FOUNDER of", "Dev || bir ⏧.", " PROGRAMMER.", "WEB DEVELOPER.", "APP DEVELOPER."],
                                autoStart: true,
                                loop: true,
                            }}
                            /></span></h2>
                            <p className='text-dark fs-5'>I am a hardworking, confident, enthusiastic Web developer and I want to utilize my knowledge and personal skills in Web Development.</p>

                            <div className='social-link text-center my-2'>
                                <h2 className='social-h2'><a href="#home"><BsGlobe /></a></h2>
                                <h2 className='social-h2'><a href="https://www.facebook.com/misty.sabbir.3/"><BsFacebook /></a></h2>
                                <h2 className='social-h2'><a href="https://www.instagram.com/dev__sabbir/?fbclid=IwAR0cozEZJSlO_1JIYXtcbxKAPDnTkJ2NDZR9VZCO4m0K8SyknAL3Se-7mqs"><BsInstagram /></a></h2>
                                <h2 className='social-h2'><a href="https://www.linkedin.com/in/md-sabbir-hossain-18300b244/"><BsLinkedin /></a></h2>
                                <h2 className='social-h2'><a href="https://github.com/sabbirvai"><BsGithub /></a></h2>    
                            </div>
                            <Button variant="warning" className='mt-4'><a href="#contact" className='text-black github'>Hire me <BsChatSquareDotsFill /></a></Button>
                            <Button variant="outline-primary" className='mt-4 mx-5'>Download Resume <BsDownload /></Button>       
                        </div>
                    </Col>
                    <Col md="6">
                        <img src={aws} alt="aws" className='sabbir-img img-fluid' data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomeTop;