import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stacks from './Stacks';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Education from './Education';

function HomePage() {
    return ( 
        <>
            <Navbar/>
            <Hero/>
            <Awards/>
            <Stacks/>
            <Education/>
            <OpenAccount/>
            <Footer/>
        </>
     );
}

export default HomePage;