import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './Projects.css';
import { BsEyeFill, BsGithub } from 'react-icons/bs';

const Projects = () => {
    const [project, setProject] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data =>setProject(data))
    }, [])
    return (
        <div className='mt-5 p-5' id='projects'>
            <Container>
                {/* <Card style={{ width: '22rem' }} className='shadow'>
                            <Card.Img variant="top" style={{ width: '320px',}} src={me} className='p-3 rounded text-center'/>
                            <Card.Body>
                                <h4 className='text-center'>bulk of the card</h4>
                                <p className='text-center fs-5 p-2'>A full-stack responsive service seller app. Users can request a service, also make a review from the dashboard.</p>
                                <div className='d-flex justify-content-around text-center'>
                                    <Button variant='outline-secondary' size="lg"><BsGithub /> GitHub</Button>

                                    <Button variant='secondary' size="lg"><BsEyeFill /> LiveSite</Button>
                                </div>
                            </Card.Body>
                </Card> */}
                <h1 className='text-center'>My Recent <span className='text-primary'>Projects</span></h1>
                <hr className='hr1'/>
                <hr className='hr2'/>
                <Row>
                    {
                        project?.map(pro =><Col md='6'sm='12' lg='4'>
                        <div className='my-4 text-center' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <Card style={{ width: '20rem' }} className='shadow'>
                                <img variant="top" style={{ width: '320px',}} src={pro?.img} className='p-3 project-img text-center' alt='img'/>
                                <Card.Body>
                                    <h4 className='text-center'>{pro?.title}</h4>
                                    <p className='text-center fs-5 p-2'>{pro?.description.slice(0, 100) + " ... more"}</p>
                                    <div className='d-flex justify-content-around text-center'>
                                        <a href={pro?.gitLink}><Button variant='outline-secondary' size="lg"><BsGithub /> GitHub</Button></a>

                                        <a href={pro?.liveSide}><Button variant='secondary' size="lg"><BsEyeFill /> LiveSite</Button></a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>)
                    }
                    {/* <Col md='6'sm='4' lg='12' >
                        <div className='mx-3 my-5' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <Card style={{ width: '22rem' }} className='shadow'>
                                <Card.Img variant="top" style={{ width: '320px',}} src={me} className='p-3 rounded text-center'/>
                                <Card.Body>
                                    <h4 className='text-center'>bulk of the card</h4>
                                    <p className='text-center fs-5 p-2'>A full-stack responsive service seller app. Users can request a service, also make a review from the dashboard.</p>
                                    <div className='d-flex justify-content-around text-center'>
                                        <Button variant='outline-secondary' size="lg"><BsGithub /> GitHub</Button>

                                        <Button variant='secondary' size="lg"><BsEyeFill /> LiveSite</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col> */}
                </Row>
            </Container>
        </div>

    );
};

export default Projects;