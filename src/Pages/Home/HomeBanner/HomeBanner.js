import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aws from '../../../Images/logo/aws.png'
import Button from 'react-bootstrap/Button';
import { BsDownload, BsChatSquareDotsFill } from "react-icons/bs";
import './HomeBanner.css';

const HomeBanner = () => {
    return (
        <div className='mt-5 my-5'>
            <Container>
                <Row>
                    <Col md="6">
                        <div className='mt-5'>
                            <h1>Hi, I'm</h1>
                            <h1 className='sabbir'>SABBIR HOSSAIN</h1>
                            <h1 className='mt-5 my-5'>I am.....</h1>
                            <Button variant="warning" className='mt-4'><a href="https://github.com/sabbirvai" className='text-black github'>Hire me <BsChatSquareDotsFill /></a></Button>
                            <Button variant="outline-primary" className='mt-4 mx-5'>Download Resume <BsDownload /></Button>       
                        </div>
                    </Col>
                    <Col md="6">
                        <img src={aws} alt="aws" className='img-fluid'/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomeBanner;