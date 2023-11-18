import './App.css';
import React from 'react';
import ParticleJS from './components/ParticlesJS/ParticleJS';
import MousePointer from './components/MousePointerAnimated/MousePointer';
import Navbar from './components/Navbar/Navbar';
import DarkMode from './components/DarkMode/DarkMode';
// import ColorChange from './components/ColorChange/ColorChange';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Certificate from './components/Certificate/Certificate';
import Service from './components/Service/Service';
import Projects from './components/Projects/Projects';
// import Shortintro from './components/Shortintro/Shortintro';

function App() {
  return (
    <div className="App">
      {/* mouse pointer and particle portion */}
      {/* <ParticleJS></ParticleJS> */}
      {/* <MousePointer></MousePointer> */}

      {/* Navbar  */}
      <Navbar></Navbar>
      {/* <ColorChange></ColorChange> */}
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Certificate></Certificate>
      <Service></Service>
      <Projects></Projects>



    </div>
  );
}

export default App;
