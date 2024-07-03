import React from 'react';
import ParticleJS from './components/ParticlesJS/ParticleJS';
import ColorChange from './components/ColorChange/ColorChange';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Certificate from './components/Certificate/Certificate';
import Service from './components/Service/Service';
import Projects from './components/Projects/Projects';
import Mission from './components/Mission/Mission';
import Ceo from './components/CEO/Ceo';
import Contact from './components/Contact/Contact';
import ScrollButton from './components/ScrollButton/ScrollButton';
import Nav from './components/Navbar/Nav';

const AppChild = () => {
    return (
        <div className="App">
            <Nav></Nav>
            <ParticleJS></ParticleJS>
            <ScrollButton></ScrollButton>
            <ColorChange></ColorChange>
            <Home></Home>
            <About></About>
            <Skills></Skills>
            <Certificate></Certificate>
            <Service></Service>
            <Projects></Projects>
            <Mission></Mission>
            <Ceo></Ceo>
            <Contact></Contact>
        </div>
    );
};

export default AppChild;