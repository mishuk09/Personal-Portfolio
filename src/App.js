import Brightness4Icon from "@mui/icons-material/Brightness4";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { Switch } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AppChild from "./AppChild";
import SingleCertificate from "./components/Certificate/SingleCertificate";
import ContactPage from "./components/ContactPage/ContactPage";
import DesingDev from "./components/Design-Dev/DesingDev";
import InternshipDetails from "./components/Internship/InternshipDetails";
import Nav from "./components/Navbar/Nav";
import Upwork from "./components/OthersComponent/Button/Upwork";
import Aiagent from "./components/Projects/Aiagent";
import Dashboard from "./components/Projects/Dashboard";
import FrontPage from "./components/Projects/Mmu/FrontPage";
import RandomForestSteps from "./components/Projects/Mmu/RandomForestSteps";
import SurveyDashboard from "./components/Projects/Mmu/SurveyDashboard ";
import SurveySummary from "./components/Projects/Mmu/SurveySummary";
import ThesisPlan from "./components/Projects/Mmu/ThesisPlan";
import ThesisSummary from "./components/Projects/Mmu/ThesisSummary";
import ProjectAll from "./components/Projects/ProjectAll";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import ThesisPapers from "./components/Thesis/ThesisPapers";
import ProtectedRoute from "./components/Utills/ProtectedRoute";
import ProtectedRouteSurvey from "./components/Utills/ProtectedRouteSurvey";
import Iiumuser from "./components/mmu/Iiumuser";
import MmuPhoto from "./components/mmu/MmuPhoto";
import Confarence from "./components/mmu/confarence";
import Photocate from "./components/mmu/photocate";
import "./index.css";

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
        <div className="darkmode-toggle pt-1">
          <Switch
            checked={darkMode}
            onChange={toggleDarkMode}
            icon={<Brightness4Icon />}
            checkedIcon={<WbSunnyIcon className={darkMode ? "sunny-dark" : ""} />}
          />
        </div>

        <Routes>
          <Route path="/" element={<AppChild></AppChild>}></Route>
          <Route path="/designdev" element={<DesingDev />}></Route>
          <Route path="/rku" element={<ThesisPapers />}></Route>
          <Route path="/certifications" element={<SingleCertificate />}></Route>
          <Route path="/projectsall" element={<ProjectAll />}></Route>
          <Route path="/ai-automation" element={<Aiagent />}></Route>

          <Route path="/rf" element={<RandomForestSteps />}></Route>

          <Route
            path="/summary"
            element={
              <ProtectedRoute>
                <SurveySummary />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path="/thesisplantwo"
            element={
              <ProtectedRoute>
                <ThesisPlan />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path="/presentation"
            element={
              <ProtectedRoute>
                <ThesisSummary />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path="/surveydashboard"
            element={
              <ProtectedRouteSurvey>
                <SurveyDashboard />
              </ProtectedRouteSurvey>
            }
          ></Route>

          <Route path="/thesisplan" element={<FrontPage />}></Route>
          <Route path="/my-photo" element={<Confarence />}></Route>
          <Route path="/photo-cate" element={<Photocate />}></Route>
          <Route path="/mmu-cate" element={<MmuPhoto />}></Route>
          <Route path="/iium-user" element={<Iiumuser />}></Route>

          <Route path="/riseuplabs" element={<InternshipDetails />}></Route>
          <Route path="/workprogress" element={<Dashboard />}></Route>
          <Route path="/contactpage" element={<ContactPage></ContactPage>}></Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
