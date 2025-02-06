import './index.css';
import React, { useState } from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Switch } from "@mui/material"
import { Route, Routes } from 'react-router-dom';
import ContactPage from './components/ContactPage/ContactPage';
import AppChild from './AppChild';
import Brightness4Icon from "@mui/icons-material/Brightness4";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DesingDev from './components/Design-Dev/DesingDev';
import Dashboard from './components/Projects/Dashboard';



function App() {
  const [darkMode, setDarkMode] = useState(false);
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
        <div className='darkmode-toggle pt-1'>
          <Switch
            checked={darkMode}
            onChange={toggleDarkMode}
            icon={<Brightness4Icon />}
            checkedIcon={<WbSunnyIcon className={darkMode ? 'sunny-dark' : ''} />}
          />
        </div>

        <Routes>
          <Route path='/' element={<AppChild></AppChild>}></Route>
          <Route path='/designdev' element={<DesingDev />}></Route>
          <Route path='/workprogress' element={<Dashboard />}></Route>
          <Route path='/contactpage' element={<ContactPage></ContactPage>}></Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
