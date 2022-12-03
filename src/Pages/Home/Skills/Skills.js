import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './Skills.css';


const Skills = () => {
    const html = 95;
    const css = 85;
    const js = 80;
    const react = 85;
    const bootstrap = 90;
    const reactBootstrap = 85;
    const tailwind = 85;
    const daisy = 80;
    const material = 50;
    const mongoDB = 70;
    const firebase = 75;
    const nodeJs = 70;
    const expressJs = 75;
    const figma = 70;
    const flatter = 50;
    const reactNative = 50;
    return (
        <div className='p-5 skill-banner' id='skills'>
            <Container className='my-5 mt-5' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <h1 className='text-center my-4'>My <span className='text-primary'>Skills</span></h1>
                <hr className='hr1'/>
                <hr className='hr2'/>
                <Row className='mx-auto'>
                    <Col md='6' sm='12' lg='3'>
                        <h5 className='my-4'>HTML</h5>
                        <ProgressBar className='text-center' animated now={html} label={`${html}%`} />
                        <h5 className='my-4'>CSS</h5>
                        <ProgressBar className='text-center' animated now={css} label={`${css}%`} />
                        <h5 className='my-4'>JavaScript</h5>
                        <ProgressBar className='text-center' animated now={js} label={`${js}%`} />
                        <h5 className='my-4'>Bootstrap</h5>
                        <ProgressBar className='text-center' animated now={bootstrap} label={`${bootstrap}%`} />
                    </Col>

                    <Col md='6' sm='12' lg='3'>
                        <h5 className='my-4'>React Bootstrap</h5>
                        <ProgressBar className='text-center' animated now={reactBootstrap} label={`${reactBootstrap}%`} />
                        <h5 className='my-4'>Tailwind</h5>
                        <ProgressBar className='text-center' animated now={tailwind} label={`${tailwind}%`} />
                        <h5 className='my-4'>Daisy UI</h5>
                        <ProgressBar className='text-center' animated now={daisy} label={`${daisy}%`} />
                        <h5 className='my-4'>Material UI</h5>
                        <ProgressBar className='text-center' animated now={material} label={`${material}%`} />
                        <h5 className='my-4'>Figma</h5>
                        <ProgressBar className='text-center' animated now={figma} label={`${figma}%`} />
                    </Col>

                    <Col md='6' sm='12' lg='3'>
                        <h5 className='my-4'>MongoDB</h5>
                        <ProgressBar className='text-center' animated now={mongoDB} label={`${mongoDB}%`} /> 
                        <h5 className='my-4'>Firebase</h5>
                        <ProgressBar className='text-center' animated now={firebase} label={`${firebase}%`} />
                        <h5 className='my-4'>Node JS</h5>
                        <ProgressBar className='text-center' animated now={nodeJs} label={`${nodeJs}%`} />
                        <h5 className='my-4'>Express JS</h5>
                        <ProgressBar className='text-center' animated now={expressJs} label={`${expressJs}%`} />                  
                    </Col>

                    <Col md='6' sm='12' lg='3'>
                        <h5 className='my-4'>React</h5>
                        <ProgressBar className='text-center' animated now={react} label={`${react}%`} />  
                        <h5 className='my-4'>Flatter</h5>
                        <ProgressBar className='text-center' animated now={flatter} label={`${flatter}%`} />  
                        <h5 className='my-4'>React Native</h5>
                        <ProgressBar className='text-center' animated now={reactNative} label={`${reactNative}%`} />  
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Skills;