import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Cursor,  useTypewriter } from 'react-simple-typewriter';
import './Blogs.css';
import fream1 from '../../../Images/shapes/fream.jpg'

const Blogs = () => {
    const [text] = useTypewriter({
        words: [`Hello user thanks for coming this page i'm sorry for that i'm building this page for everyone they can post somethings here and also they can read lot's of blog of mine and most of the developer blog they can also read Thank You! 🥰❤😍`],
        loop: '2',
        onLoopDone: () => console.log(`loop completed after Infinity runs.`)
      })
    return (
        <div className='p-1 blogs-container' id='blogs' style={{
            background: `url(${fream1})`,
            backgroundSize: 'cover',
        }}>
            <Container className='mt-5 my-5'>
                <div>
                    <h1 className='text-center my-4'>My <span className='text-primary'>Blogs</span></h1>
                    <hr className='hr1'/>
                    <hr className='hr2'/>
                </div>
                <Row data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <Col md="12">
                        <div style={{height:'450px'}}>
                            <div className="container">
                                <div className="text-center mt-5">
                                <p className='fs-3 mt-5 text-cursor'>I'm  {text}</p>
                                    <Cursor cursorColor='red' />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blogs;