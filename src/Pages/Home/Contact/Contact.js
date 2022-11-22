import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Contact.css';
import { BsFillTelephoneInboundFill, BsFillEnvelopeOpenFill, BsCursorFill } from "react-icons/bs";
import Form from 'react-bootstrap/Form';


const Contact = () => {
    return (
        <div>
            <h1 className='text-center mx-5 my-5'>Get in <span className='text-primary'>Touch</span></h1>
            <Container>
                <Row>
                    <Col md='4'>
                        <div className='phone'>
                            <h2>
                                <span><BsFillTelephoneInboundFill /></span>
                            </h2>
                            <div>
                                <h2>Phone</h2>
                                <h6>+088 018-88559287</h6>
                            </div>
                        </div>

                        <div className='email'>
                            <h2>
                                <span><BsFillEnvelopeOpenFill /></span>
                            </h2>
                            <div>
                                <h2>Email</h2>
                                <h6>mdsabbir4774770@gmail.com</h6>
                            </div>
                        </div>

                        <div className='location'>
                            <h2>
                                <span><BsCursorFill /></span>
                            </h2>
                            <div>
                                <h2>Location</h2>
                                <h6>Rangpur, Badarganj-201</h6>
                            </div>
                        </div>

                        <div className='social-link my-5'>
                            <h2><a href="#kkk">kk</a></h2>
                            <h2><a href="#kkk">kk</a></h2>
                            <h2><a href="#kkk">kk</a></h2>
                            <h2><a href="#kkk">kk</a></h2>
                            <h2><a href="#kkk">kk</a></h2>    
                        </div>
                    </Col>
                    <Col md='8'>
                    <Form>
                        <div className='name-email'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email *</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" required/>
                            </Form.Group>
                            
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email *</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" required/>
                            </Form.Group>
                        </div>
                        
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" placeholder="subject" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message *</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Message me please" required/>
                        </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;