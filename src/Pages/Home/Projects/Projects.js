import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Projects = () => {
    return (
            <div>
            <h1 className='text-center mt-5 my-5'>My <span className='text-primary'>Projects</span></h1>
            <Container>
                <Row>
                    <Col md="12">Projects</Col>
                </Row>
            </Container>
        </div>
    );
};

export default Projects;