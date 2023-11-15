import './App.css';
import React from 'react';
import ParticleJS from './components/ParticlesJS/ParticleJS';
import MousePointer from './components/MousePointerAnimated/MousePointer';
import Navbar from './components/Navbar/Navbar';
import DarkMode from './components/DarkMode/DarkMode';
import ColorChange from './components/ColorChange/ColorChange';
import Home from './components/Home/Home';

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

    </div>
  );
}

export default App;
