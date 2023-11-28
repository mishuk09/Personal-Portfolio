import './App.css';
import React from 'react';
import ParticleJS from './components/ParticlesJS/ParticleJS';
import MousePointer from './components/MousePointerAnimated/MousePointer';
import Navbar from './components/Navbar/Navbar';
import DarkMode from './components/DarkMode/DarkMode';
import ColorChange from './components/ColorChange/ColorChange';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Certificate from './components/Certificate/Certificate';
import Service from './components/Service/Service';
import Projects from './components/Projects/Projects';
import Mission from './components/Mission/Mission';
import Ceo from './components/CEO/Ceo';
import MapChart from './components/CEO/earth/MapChart';
import Contact from './components/Contact/Contact';
import Pro from './components/Projects/ProjectVideo';
import Uiux from './components/Service/ServiceDiv/Uiux';
import Testimonier from './components/CEO/Testimonier/Testimonier';
import ContactForm from './components/Contact/ContactForm';
import { Route, Routes } from 'react-router-dom';
import ContactPage from './components/ContactPage/ContactPage';
import ScrollButton from './components/ScrollButton/ScrollButton';
// import Shortintro from './components/Shortintro/Shortintro';

const AppChild = () => {
    return (
        <div className="App">
            {/* mouse pointer and particle portion */}
            <ParticleJS></ParticleJS>
            {/* <MousePointer></MousePointer> */}

        

            {/* Navbar  */}
            {/* <Navbar></Navbar> */}
            <ScrollButton></ScrollButton>
            <ColorChange></ColorChange>
            <Home></Home>

            <About></About>
            <Skills></Skills>
            <Certificate></Certificate>
            <Service></Service>
            {/* <Uiux></Uiux> */}
            {/* <Pro></Pro> */}
            <Projects></Projects>
            <Mission></Mission>
            <Ceo></Ceo>
            <Contact></Contact>
            {/* <Testimonier></Testimonier> */}

            {/* <ContactForm></ContactForm> */}

        </div>
    );
};

export default AppChild;