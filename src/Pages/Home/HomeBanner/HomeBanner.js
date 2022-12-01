import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aws from '../../../Images/logo/aws.png'
import Button from 'react-bootstrap/Button';
import { BsDownload, BsChatSquareDotsFill } from "react-icons/bs";
import './HomeBanner.css';
import Typewriter from 'typewriter-effect';

const HomeBanner = () => {
    
    return (
        <div className='mt-5 my-5'>
            <Container>
                <Row>
                    <Col md="6" className='mt-5' data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <div className=''>
                            <h1>Hi, I'm</h1>
                            <h1 className='sabbir text-primary'>SABBIR HOSSAIN</h1>
                            <h2 className=''>SABBIR HOSSAIN</h2>
                            
                            <Typewriter
                            className='options'
                            options={{
                                strings: ["CEO & FOUNDER of", "𝒮𝒶𝒷𝒷𝒾𝓇 𝕀𝕋 ⏧.", " PROGRAMMER.", "WEB DEVELOPER.", "APP DEVELOPER."],
                                autoStart: true,
                                loop: true,
                            }}
                            />
                            <Button variant="warning" className='mt-4'><a href="https://github.com/sabbirvai" className='text-black github'>Hire me <BsChatSquareDotsFill /></a></Button>
                            <Button variant="outline-primary" className='mt-4 mx-5'>Download Resume <BsDownload /></Button>       
                        </div>
                    </Col>
                    <Col md="6">
                        <img src={aws} alt="aws" className='img-fluid sabbir-img' data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomeBanner;