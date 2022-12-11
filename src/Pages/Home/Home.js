import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Project from '../Project/Project';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Project></Project>
            <Blog></Blog>
            <Contact></Contact>
        </div>
    );
};

export default Home;