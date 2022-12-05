import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import sabbir from '../../../Images/logo/sabbir2.png'
import Button from 'react-bootstrap/Button';
import { BsDownload, BsGithub } from "react-icons/bs";
import './About.css';
import fream1 from '../../../Images/shapes/fream.jpg'

const About = () => {
    return (
        <div className='p-2' id='about'
        style={{
            background: `url(${fream1})`,
            backgroundSize: 'cover',
        }}>
            <Container>
                <h1 className='text-center my-4'><span className='text-primary'>About</span> Me</h1>
                    <hr className='hr1'/>
                    <hr className='hr2'/>
                <Row className='mt-5 my-5'>
                    <Col md='4'>
                        <div data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <img src={sabbir} alt="" className='img-fluid p-3'/>
                        </div>
                    </Col>
                    <Col md='8' className='my-5'>
                        <div>
                            <p className='mt-3 fs-5 text-secondary'>Assalamu-alaykum, I am Sabbir Hossain. I am currently studying for a Diploma in Engineering of Computer Science. My campus name is Habiganj polytechnic Institute.I am a programmer with a good level of expertise in Front-End Web Development. My birth place is located in Rangpur, Badarganj, Khairpara. I love Football & Coding. I like to learn and teach.I'm interested in MERN (MongoDB, ExpressJS, ReactJS, NodeJS) stack web development.
                                <br />
                                <br />
                                I am a hardworking, confident, enthusiastic Web developer and I want to utilize my knowledge and personal skills in Web Development. Also eagerly wants to serve a professional organization to the best of my knowledge with true dedication, hard work, and commitment.

                            </p>
                            <div className='d-flex justify-content-start text-center'>
                                <Button size="md" variant="outline-primary" className='mt-4'>Download Resume <BsDownload /></Button>
                                <Button variant="warning" size="md" className='mt-4 mx-5'><a href="https://github.com/sabbirvai" className='text-black github'>GitHub <BsGithub /></a></Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;