import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';


const Skills = () => {
    const now = 60;
    return (
        <div className='my-5 mt-5'>
            <h1 className='text-center my-5'>My <span className='text-primary'>Skills</span></h1>
            <Container>
                <Row>
                    <Col md='3'>
                        <h5 className='my-4'>HTML</h5>
                        
                        <ProgressBar now={now} label={`${now}%`} />
                        <ProgressBar animated now={95} />
                        <h5 className='my-4'>CSS</h5>
                        <ProgressBar animated now={85} />
                        <h5 className='my-4'>JavaScript</h5>
                        <ProgressBar animated now={80} />
                        <h5 className='my-4'>React</h5>
                        <ProgressBar animated now={85} />
                    </Col>

                    <Col md='3'>
                        <h5 className='my-4'>Bootstrap</h5>
                        <ProgressBar animated now={90} />
                        <h5 className='my-4'>React Bootstrap</h5>
                        <ProgressBar animated now={85} />
                        <h5 className='my-4'>Tailwind</h5>
                        <ProgressBar animated now={85} />
                        <h5 className='my-4'>Daisy UI</h5>
                        <ProgressBar animated now={80} />
                        <h5 className='my-4'>Material UI</h5>
                        <ProgressBar animated now={70} />
                    </Col>

                    <Col md='3'>
                        <h5 className='my-4'>MongoDB</h5>
                        <ProgressBar animated now={75} /> 
                        <h5 className='my-4'>Firebase</h5>
                        <ProgressBar animated now={75} />
                        <h5 className='my-4'>Node JS</h5>
                        <ProgressBar animated now={80} />
                        <h5 className='my-4'>Express JS</h5>
                        <ProgressBar animated now={70} />         
                        <h5 className='my-4'>Figma</h5>
                        <ProgressBar animated now={80} />         
                    </Col>

                    <Col md='3'>
                        <h5 className='my-4'>C#</h5>
                        <ProgressBar animated now={65} />
                        <h5 className='my-4'>Python</h5>
                        <ProgressBar animated now={60} />
                        <h5 className='my-4'>Flatter</h5>
                        <ProgressBar animated now={50} />
                        <h5 className='my-4'>React Native</h5>
                        <ProgressBar animated now={50} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Skills;