import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { BsCheckCircleFill, BsFillCircleFill } from 'react-icons/bs';
// import ProgressBar from 'react-bootstrap/ProgressBar';
// import {  BsFillBsFillCircleFillFill, BsFillCircleFill } from 'react-icons/bs';
import './Skills.css';


const Skills = () => {
    // const html = 95;
    // const css = 85;
    // const js = 80;
    // const react = 85;
    // const bootstrap = 90;
    // const reactBootstrap = 85;
    // const tailwind = 85;
    // const daisy = 80;
    // const material = 50;
    // const mongoDB = 70;
    // const firebase = 75;
    // const nodeJs = 70;
    // const expressJs = 75;
    // const figma = 70;
    // const flatter = 50;
    // const reactNative = 50;
    return (
        <div className='p-5 skill-banner' id='skills'>
            <Container className='my-5 mt-5' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <h1 className='text-center my-4'>My <span className='text-primary'>Skills</span></h1>
                <hr className='hr1'/>
                <hr className='hr2'/>
                
                <Row className='mx-auto gap'>
                    <Col md='6'sm='12' lg='4' className='text-center'>
                        <div className='my-4 mx-2 text-center' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <Card className='shadow-lg mt-5'>
                                <Row>
                                    <Col md='5'>
                                        <img variant="top" src={`https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png`} className='p-3 project-img text-center rounded' alt='img'/>
                                    </Col>
                                    <Col md='7'>
                                        <Card.Body>
                                            <h4 className='card-title'>JAVASCRIPT</h4>
                                            <hr className='hr2'/>
                                            <p className='card-text fs-5 text-secondary'><BsCheckCircleFill className='mx-2 text-success'/>Can solve problems</p>
                                            <p className='card-text fs-5 text-secondary'><BsCheckCircleFill className='mx-2 text-success'/> Good at DOM</p>
                                            <p className='card-text fs-5 text-secondary'><BsCheckCircleFill className='mx-2 text-success'/> Know Core Functions</p>
                                            <div className='text-center'>
                                                <BsFillCircleFill className='text-center mx-1'/>
                                                <BsFillCircleFill className='text-center mx-1'/>
                                                <BsFillCircleFill className='text-center mx-1'/>
                                                <BsFillCircleFill className='text-center mx-1'/>
                                            </div>
                                        </Card.Body>
                                        <p class="card-text mt-2"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </Col>
                                </Row>
                            </Card>
                        </div>
                    </Col>
                    <Col md='6'sm='12' lg='4' className='text-center'>
                        <div className='my-4 mx-2 text-center' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <Card className='shadow-lg mt-5'>
                                <Row>
                                    <Col md='5'>
                                        <img variant="top" src={`https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png`} className='p-3 project-img text-center rounded' alt='img'/>
                                    </Col>
                                    <Col md='7'>
                                        <Card.Body>
                                            <h4 className='card-title'>JAVASCRIPT</h4>
                                            <hr className='hr2'/>
                                            <p className='card-text fs-5 text-secondary'><BsCheckCircleFill className='mx-2 text-success'/>Can solve problems</p>
                                            <p className='card-text fs-5 text-secondary'><BsCheckCircleFill className='mx-2 text-success'/> Good at DOM</p>
                                            <p className='card-text fs-5 text-secondary'><BsCheckCircleFill className='mx-2 text-success'/> Know Core Functions</p>
                                            <div className='text-center'>
                                                <BsFillCircleFill className='text-center mx-1'/>
                                                <BsFillCircleFill className='text-center mx-1'/>
                                                <BsFillCircleFill className='text-center mx-1'/>
                                                <BsFillCircleFill className='text-center mx-1'/>
                                            </div>
                                        </Card.Body>
                                        <p class="card-text mt-2"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </Col>
                                </Row>
                            </Card>
                        </div>
                    </Col>
                    <Col md='6'sm='12' lg='4' className='text-center'>
                        <div className='my-4 mx-2 text-center' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <Card className='shadow-lg mt-5'>
                                <Row>
                                    <Col md='5'>
                                        <img variant="top" src={`https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png`} className='p-3 project-img text-center rounded' alt='img'/>
                                    </Col>
                                    <Col md='7'>
                                        <Card.Body>
                                            <h4 className='card-title'>JAVASCRIPT</h4>
                                            <hr className='hr2'/>
                                            <p className='card-text fs-5 text-secondary'><BsCheckCircleFill className='mx-2 text-success'/>Can solve problems</p>
                                            <p className='card-text fs-5 text-secondary'><BsCheckCircleFill className='mx-2 text-success'/> Good at DOM</p>
                                            <p className='card-text fs-5 text-secondary'><BsCheckCircleFill className='mx-2 text-success'/> Know Core Functions</p>
                                            <div className='text-center'>
                                                <BsFillCircleFill className='text-center mx-1'/>
                                                <BsFillCircleFill className='text-center mx-1'/>
                                                <BsFillCircleFill className='text-center mx-1'/>
                                                <BsFillCircleFill className='text-center mx-1'/>
                                            </div>
                                        </Card.Body>
                                        <p class="card-text mt-2"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </Col>
                                </Row>
                            </Card>
                        </div>
                    </Col>
                </Row>
                
            </Container>
        </div>
        
    );
};

export default Skills;