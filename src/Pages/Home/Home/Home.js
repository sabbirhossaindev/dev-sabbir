import React from 'react';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
// import HomeBanner from '../HomeBanner/HomeBanner';
import HomeTop from '../HomeTop/HomeTop';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            {/* <HomeBanner></HomeBanner> */}
            <HomeTop></HomeTop>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Blogs></Blogs>
            <Contact></Contact>
        </div>
    );
};

export default Home;