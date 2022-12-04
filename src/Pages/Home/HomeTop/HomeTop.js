import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub, BsDownload, BsChatSquareDotsFill, BsGlobe } from "react-icons/bs";
import aws from '../../../Images/logo/aws.png'
// import HomeBanner from '../HomeBanner/HomeBanner';
import { Cursor, useTypewriter } from 'react-simple-typewriter'

import './HomeTop.css';

const HomeTop = () => {
    const [text] = useTypewriter({
        words: ['Full Stack Web Developer 💻', 'Programmer 💻', 'Sab | Bir 💻', 'Web Developer 💻', 'Software Engineer 💻', 'Coder 💻'],
        loop: Infinity,
        onLoopDone: () => console.log(`loop completed after Infinity runs.`)
      })
      
    return (
        <div className='home-Banner p-5' id='home'>
            <div className='position-relative w-100 h-100 home-top'>
                {/* <HomeBanner /> */}
            </div>
            <Container className='mt-5 my-5'>
                <Row>
                    <Col md="6" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <div className=''>
                            <h3>Hey, <span><strong className='text-danger'>Do you know me?</strong></span> I'm </h3>
                            <h1 className='sabbir'>Sabb<span>&iuml;</span>r Hossain</h1>     
                            <span className='fs-1 mt-5 text-cursor'>I'm  {text}</span>
                            <Cursor cursorColor='red' />
                            <p className='text-dark fs-5 mt-2'>I am a hardworking, confident, enthusiastic Web developer and I want to utilize my knowledge and personal skills in Web Development.</p>

                            <div className='social-link text-center my-2'>
                                <h2 className='social-h2'><a href="#home"><BsGlobe className='text-primary'/></a></h2>

                                <h2 className='social-h2'><a href="https://github.com/sabbirvai"><BsGithub className='text-secondary'/></a></h2> 

                                <h2 className='social-h2'><a href="https://www.linkedin.com/in/md-sabbir-hossain-18300b244/"><BsLinkedin className='text-primary'/></a></h2>
                                   
                                <h2 className='social-h2'><a href="https://www.facebook.com/misty.sabbir.3/"><BsFacebook className='text-primary'/></a></h2>

                                <h2 className='social-h2'><a href="https://www.instagram.com/dev__sabbir/?fbclid=IwAR0cozEZJSlO_1JIYXtcbxKAPDnTkJ2NDZR9VZCO4m0K8SyknAL3Se-7mqs"><BsInstagram className='text-danger'/></a></h2>
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