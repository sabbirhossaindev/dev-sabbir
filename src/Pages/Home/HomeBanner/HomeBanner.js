import React, { useCallback } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aws from '../../../Images/logo/aws.png'
import Button from 'react-bootstrap/Button';
import { BsDownload, BsChatSquareDotsFill, BsFacebook, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import './HomeBanner.css';
import Typewriter from 'typewriter-effect';
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

const HomeBanner = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    
    return (
        <div className='home-Banner p-5' id='home'>
            <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
            
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#000000",
                    },
                    links: {
                        color: "#000000",
                        distance: 140,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "bottom",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 100,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                },
                detectRetina: true,
            }}
        />
            <div className="position-fixed fixed-bottom text-end me-4 mb-4">
                <a href="#home">
                    <img className='img-fluid go-to-top-icon' src='https://icon-library.com/images/back-to-top-icon-png/back-to-top-icon-png-7.jpg' alt="back-to-top-icon" />
                </a>
            </div>
            <Container className='mt-5 my-5'>
                <Row>
                    <Col md="6" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <div className=''>
                            <h1>Hi, I'm</h1>
                            <h1 className='sabbir text-primary'>Sabbir <br /> Hossain.</h1>     
                            <h1 className='mt-4 my-3'>I'm </h1> <Typewriter
                            className='options'
                            options={{
                                strings: ["CEO & FOUNDER of", "Dev || bir ⏧.", " PROGRAMMER.", "WEB DEVELOPER.", "APP DEVELOPER."],
                                autoStart: true,
                                loop: true,
                            }}
                            />
                            <div className='social-link text-center'>
                                <h2 className='social-h2'><a href="https://www.facebook.com/misty.sabbir.3/"><BsFacebook /></a></h2>
                                <h2 className='social-h2'><a href="https://www.instagram.com/dev__sabbir/?fbclid=IwAR0cozEZJSlO_1JIYXtcbxKAPDnTkJ2NDZR9VZCO4m0K8SyknAL3Se-7mqs"><BsInstagram /></a></h2>
                                <h2 className='social-h2'><a href="https://www.linkedin.com/in/md-sabbir-hossain-18300b244/"><BsLinkedin /></a></h2>
                                <h2 className='social-h2'><a href="https://github.com/sabbirvai"><BsGithub /></a></h2>    
                            </div>
                            <Button variant="warning" className='mt-4'><a href="https://github.com/sabbirvai" className='text-black github'>Hire me <BsChatSquareDotsFill /></a></Button>
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

export default HomeBanner;