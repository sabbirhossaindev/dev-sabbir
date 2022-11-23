import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import sabbir from '../../../Images/logo/sabbir2.png'
import Button from 'react-bootstrap/Button';
import { BsDownload, BsGithub } from "react-icons/bs";
import './About.css';

const About = () => {
    return (
        <div className='mt-5 my-5'>
            <h1 className='text-center my-5'><span className='text-primary'>About</span> Me</h1>
            <Container>
                <Row>
                    <Col md='4'>
                        <div>
                            <img src={sabbir} alt="" className='img-fluid p-3'/>
                        </div>
                    </Col>
                    <Col md='8'>
                        <div>
                            <p className='mt-3'>Assalamu-alaykum I'm Sabbir Hossain CEO & Founder of 𝒮𝒶𝒷𝒷𝒾𝓇..𝕀𝕋 ⏧. I am currently studying for a Diploma in Engineering of Computer Science. My campus name is Habiganj polytechnic Institute. I am a programmer, web developer, app developer & Freelancer. My birth place is located in Rangpur District Badarganj Thana Ramnathpur Union. My father is Business-men. My mother is a home-maker. I have one brother & one sister. I love Football & Coding. I like to learn and teach.
                                <br />
                                <br />
                            I am currently studying for a Diploma in Engineering of Computer Science. My campus name is Habiganj polytechnic Institute. I am a programmer, web developer, app developer & Freelancer. My birth place is located in Rangpur District Badarganj Thana Ramnathpur Union. My father is Business-men. My mother is a home-maker. I have one brother & one sister. I love Football & Coding. I like to learn and teach.
                            </p>
                            <Button variant="outline-primary" className='mt-4'>Download Resume <BsDownload /></Button>
                            <Button variant="warning" className='mt-4 mx-5'><a href="https://github.com/sabbirvai" className='text-black github'>GitHub <BsGithub /></a></Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;