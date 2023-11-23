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
import AppChild from './AppChild';
import Button from './components/OthersComponent/Button/Button';
// import Shortintro from './components/Shortintro/Shortintro';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<AppChild></AppChild>}></Route>
        <Route path='/contactpage' element={<ContactPage></ContactPage>}></Route>
      </Routes>
      {/* <Button></Button> */}
    </div>
  );
}

export default App;
