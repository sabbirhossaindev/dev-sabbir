import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';


const Skills = () => {
    const html = 95;
    const css = 85;
    const js = 80;
    const react = 85;
    const bootstrap = 90;
    const reactBootstrap = 85;
    const tailwind = 85;
    const daisy = 80;
    const material = 70;
    const mongoDB = 70;
    const firebase = 70;
    const nodeJs = 70;
    const expressJs = 70;
    const figma = 70;
    const cSharp = 70;
    const python = 70;
    const flatter = 70;
    const reactNative = 70;
    return (
        <Container className='my-5 mt-5'>
            <h1 className='text-center my-5'>My <span className='text-primary'>Skills</span></h1>
            <Row>
                <Col md='3'>
                    <h5 className='my-4'>HTML</h5>
                    <ProgressBar animated now={html} label={`${html}%`} />
                    <h5 className='my-4'>CSS</h5>
                    <ProgressBar animated now={css} label={`${css}%`} />
                    <h5 className='my-4'>JavaScript</h5>
                    <ProgressBar animated now={js} label={`${js}%`} />
                    <h5 className='my-4'>React</h5>
                    <ProgressBar animated now={react} label={`${react}%`} />
                </Col>

                <Col md='3'>
                    <h5 className='my-4'>Bootstrap</h5>
                    <ProgressBar animated now={bootstrap} label={`${bootstrap}%`} />
                    <h5 className='my-4'>React Bootstrap</h5>
                    <ProgressBar animated now={reactBootstrap} label={`${reactBootstrap}%`} />
                    <h5 className='my-4'>Tailwind</h5>
                    <ProgressBar animated now={tailwind} label={`${tailwind}%`} />
                    <h5 className='my-4'>Daisy UI</h5>
                    <ProgressBar animated now={daisy} label={`${daisy}%`} />
                    <h5 className='my-4'>Material UI</h5>
                    <ProgressBar animated now={material} label={`${material}%`} />
                </Col>

                <Col md='3'>
                    <h5 className='my-4'>MongoDB</h5>
                    <ProgressBar animated now={mongoDB} label={`${mongoDB}%`} /> 
                    <h5 className='my-4'>Firebase</h5>
                    <ProgressBar animated now={firebase} label={`${firebase}%`} />
                    <h5 className='my-4'>Node JS</h5>
                    <ProgressBar animated now={nodeJs} label={`${nodeJs}%`} />
                    <h5 className='my-4'>Express JS</h5>
                    <ProgressBar animated now={expressJs} label={`${expressJs}%`} />         
                    <h5 className='my-4'>Figma</h5>
                    <ProgressBar animated now={figma} label={`${figma}%`} />         
                </Col>

                <Col md='3'>
                    <h5 className='my-4'>C#</h5>
                    <ProgressBar animated now={cSharp} label={`${cSharp}%`} />  
                    <h5 className='my-4'>Python</h5>
                    <ProgressBar animated now={python} label={`${python}%`} />  
                    <h5 className='my-4'>Flatter</h5>
                    <ProgressBar animated now={flatter} label={`${flatter}%`} />  
                    <h5 className='my-4'>React Native</h5>
                    <ProgressBar animated now={reactNative} label={`${reactNative}%`} />  
                </Col>
            </Row>
        </Container>
    );
};

export default Skills;