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
import ThesisPapers from './components/Thesis/ThesisPapers';
import Nav from './components/Navbar/Nav';
import SingleCertificate from './components/Certificate/SingleCertificate';
import InternshipDetails from './components/Internship/InternshipDetails';
import ScrollButton from './components/ScrollButton/ScrollButton';
import Upwork from './components/OthersComponent/Button/Upwork';
import Projects from './components/Projects/Projects';
import ProjectAll from './components/Projects/ProjectAll';
import ProtectedRoute from './components/Utills/ProtectedRoute';
import Summary from './components/Projects/Mmu/Summary';
import SurveySummary from './components/Projects/Mmu/SurveySummary';
import ThesisPlan from './components/Projects/Mmu/ThesisPlan';
import FrontPage from './components/Projects/Mmu/FrontPage';
import SurveyDashboard from './components/Projects/Mmu/SurveyDashboard ';
import ProtectedRouteSurvey from './components/Utills/ProtectedRouteSurvey';


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
      <Nav />
      <ScrollButton />
      <Upwork />


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
          <Route path='/rku' element={<ThesisPapers />}></Route>
          <Route path='/certifications' element={<SingleCertificate />}></Route>
          <Route path='/projectsall' element={<ProjectAll />}></Route>
          <Route path='/projects' element={<Projects />}></Route>

          <Route path='/summary' element={<ProtectedRoute>
            <SurveySummary />
          </ProtectedRoute>}></Route>

          <Route path='/thesisplantwo' element={<ProtectedRoute>
            <ThesisPlan />
          </ProtectedRoute>}></Route>

          {/* <Route path='/thesisplan' element={<ProtectedRoute>
            <FrontPage />
          </ProtectedRoute>}></Route> */}

          <Route path='/surveydashboard' element={<ProtectedRouteSurvey>
            <SurveyDashboard />
          </ProtectedRouteSurvey>}></Route>



          <Route path='/thesisplan' element={<FrontPage />}></Route>



          <Route path='/riseuplabs' element={<InternshipDetails />}></Route>
          <Route path='/workprogress' element={<Dashboard />}></Route>
          <Route path='/contactpage' element={<ContactPage></ContactPage>}></Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
