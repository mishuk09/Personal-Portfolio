import './App.css';
import React, { useState } from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import DarkMode from './components/DarkMode/DarkMode';
import { Card, CardContent, CardMedia, Switch, Typography } from "@mui/material"


import ParticleJS from './components/ParticlesJS/ParticleJS';
import MousePointer from './components/MousePointerAnimated/MousePointer';
import Navbar from './components/Navbar/Navbar';
// import DarkMode from './components/DarkMode/DarkMode';
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
import Nav from './components/Navbar/Nav';
import { dark } from '@mui/material/styles/createPalette';
// import Shortintro from './components/Shortintro/Shortintro';
import Brightness4Icon from "@mui/icons-material/Brightness4";
import WbSunnyIcon from "@mui/icons-material/WbSunny";






function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#f48fb1",
      },
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">

        <Nav></Nav>
        {/* <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
          <h2>Toggle Dark mode</h2>
          <Switch checked={darkMode} onChange={toggleDarkMode} />
          <Card sx={{ width: '30%', borderRadius: 3, padding: 1, marginTop: '20px' }}>
            <CardContent>
              <CardMedia
                sx={{ height: 180, borderRadius: 3 }}
                image="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
                title="semaphore"
              />
              <h1 variant="h4" component="div" sx={{ marginTop: 3 }}>
                Programming Blogs
              </h1>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                by Semaphore
              </Typography>
              <Typography variant="body1">
                Checkout the latest blogs on Semaphore. Semaphore provides you the best CI/CD solution
                for high-performance engineering teams.
              </Typography>
              <p>hi i am mishuk</p>
            </CardContent>
          </Card>
        </div> */}
      
      <div >
             
             <Switch
                 checked={darkMode}
                 onChange={toggleDarkMode}
                 icon={<Brightness4Icon />} // Icon for normal mode
                 checkedIcon={<WbSunnyIcon />} // Icon for dark mode
             />
         </div>

        {/* <Navbar></Navbar> */}
        <Routes>
          <Route path='/' element={<AppChild></AppChild>}></Route>
          <Route path='/contactpage' element={<ContactPage></ContactPage>}></Route>
        </Routes>
        {/* <Button></Button> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
