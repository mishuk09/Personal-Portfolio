import React from 'react';
import ParticleJS from './components/ParticlesJS/ParticleJS';
import ColorChange from './components/ColorChange/ColorChange';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Certificate from './components/Certificate/Certificate';
import Service from './components/Service/Service';
import Mission from './components/Mission/Mission';
import Ceo from './components/CEO/Ceo';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';

const AppChild = () => {
    return (
        <div className="App">

            <ParticleJS />
            <ColorChange />
            <Home />
            <About />
            <Skills />
            <Certificate />
            <Service />
            <Projects />
            <Mission />
            <Ceo />
            <Contact />
        </div>
    );
};

export default AppChild;