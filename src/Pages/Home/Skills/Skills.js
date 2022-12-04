import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { BsCheckCircleFill, BsStarFill } from 'react-icons/bs';
import './Skills.css';

const Skills = () => {
    const [skills, setSkills] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/skills`)
            .then(res => res.json())
            .then(data => setSkills(data))
    },[])
    return (
        <div className='p-5 skill-banner' id='skills'>
            <Container className='my-5 mt-5' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <h1 className='text-center my-4'>My <span className='text-primary'>Skills</span></h1>
                <hr className='hr1'/>
                <hr className='hr2'/>
                
                <Row className='mx-auto gap'>
                    
                    {
                        skills?.map(skill =><Col md='6'sm='12' lg='4' className='text-center'>
                        <div className='my-4 mx-2 text-center' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <Card className='shadow-lg mt-5'>
                                <Row>
                                    <Col md='5'>
                                        <img variant="top" src={skill?.img} className='p-3 project-img text-center rounded' alt='img'/>
                                    </Col>
                                    <Col md='7'>
                                        <Card.Body>
                                            <h4 className='card-title'>{skill?.title}</h4>
                                            <hr className='hr2'/>
                                            <p className='card-text text-start fs-5'><BsCheckCircleFill className='mx-2 text-success'/>{skill?.one}</p>
                                            <p className='card-text text-start fs-5'><BsCheckCircleFill className='mx-2 text-success'/> {skill?.two}</p>
                                            <p className='card-text text-start fs-5'><BsCheckCircleFill className='mx-2 text-success'/> {skill?.three}</p>

                                            <div className='text-center'>
                                                <BsStarFill className='text-center text-warning mx-1'/>
                                                <BsStarFill className='text-center text-warning mx-1'/>
                                                <BsStarFill className='text-center text-warning mx-1'/>
                                                <BsStarFill className='text-center text-warning mx-1'/>
                                            </div>
                                            {/* <div className='text-center'>
                                                <h3>{skill?.develop}</h3>
                                            </div> */}
                                        </Card.Body>
                                        <p class="card-text p-3"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </Col>
                                </Row>
                            </Card>
                        </div>
                    </Col>)
                    }

                </Row>           
            </Container>
        </div>
        
    );
};

export default Skills;