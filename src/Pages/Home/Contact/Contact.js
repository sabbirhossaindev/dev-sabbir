import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Contact.css';
import { BsFillTelephoneInboundFill, BsFillEnvelopeOpenFill, BsCursorFill, BsFacebook, BsInstagram, BsLinkedin, BsGithub, BsGlobe } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';


const Contact = () => {

    const addSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const subject = form.subject.value;
        const message = form.message.value;
        const addInfo = {
            name, email, subject, message
        }
        console.log('addInfo', addInfo);
        // toast.success('Message sand please check your mail few minute letter Sabbir feetBack 📝 Thank you! 🥰');
        // form.reset('');

        fetch(`http://localhost:5000/submit`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(addInfo)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast.success('Message sand 🥰 Please check your mail Your answer will be given after a few minutes later 📝 Thank you! 🥰');
            form.reset('');
        })
    }

    return (
        <div className='p-5 contact-container' id='contact'>
            <h1 className='text-center my-4'>Get in <span className='text-primary'>Touch</span></h1>
                <hr className='hr1'/>
                <hr className='hr2'/>
            <Container className='my-5'>
                <Row className='mt-5'>
                    <Col md='5' data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <div className='phone'>
                            <h2 className='mt-2'>
                                <span><BsFillTelephoneInboundFill /></span>
                            </h2>
                            <div>
                                <h2>Phone</h2>
                                <h5>+088 018-88559287</h5>
                            </div>
                        </div>

                        <div className='email'>
                            <h2 className='mt-2'>
                                <span><BsFillEnvelopeOpenFill /></span>
                            </h2>
                            <div>
                                <h2>Email</h2>
                                <h5>mdsabbir4774770@gmail.com</h5>
                            </div>
                        </div>

                        <div className='location'>
                            <h2 className='mt-2'>
                                <span><BsCursorFill /></span>
                            </h2>
                            <div>
                                <h2>Location</h2>
                                <h5>Rangpur, Badarganj-201</h5>
                            </div>
                        </div>

                        <div className='social-link text-center my-2'>
                                <h2 className='social-h2'><a href="#home"><BsGlobe /></a></h2>

                                <h2 className='social-h2'><a href="https://github.com/sabbirvai"><BsGithub /></a></h2> 

                                <h2 className='social-h2'><a href="https://www.linkedin.com/in/md-sabbir-hossain-18300b244/"><BsLinkedin /></a></h2>
                                   
                                <h2 className='social-h2'><a href="https://www.facebook.com/misty.sabbir.3/"><BsFacebook /></a></h2>

                                <h2 className='social-h2'><a href="https://www.instagram.com/dev__sabbir/?fbclid=IwAR0cozEZJSlO_1JIYXtcbxKAPDnTkJ2NDZR9VZCO4m0K8SyknAL3Se-7mqs"><BsInstagram /></a></h2>
                            </div>
                    </Col>

                    <Col md='7' className='mt-2'>
                    <Form onSubmit={addSubmit}> 
                        <Row>
                            <Col md="6">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control name='name' type="text" placeholder="Name" required/>
                                </Form.Group>
                            </Col>
                            <Col md="6">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email *</Form.Label>
                                    <Form.Control name='email' type="email" placeholder="Enter email" required/>
                                </Form.Group>
                            </Col>
                        </Row>
                        
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control name='subject' type="text" placeholder="subject" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message *</Form.Label>
                            <Form.Control as="textarea" rows={3} name='message' placeholder="Message me please" required/>
                        </Form.Group>
                        
                        <button type="submit" className='my-3 btn btn-primary'>Sand Message</button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;