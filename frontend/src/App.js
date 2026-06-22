import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteBackground from "./components/SiteBackground/SiteBackground";
import CursorPixelTrail from "./components/CursorPixelTrail";
import Navigation from "./components/Navigation";
import SpiderManHero from "./components/SpiderManHero";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import ResearchPage from "./pages/ResearchPage";
import HonorsPage from "./pages/HonorsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      <SiteBackground />
      <CursorPixelTrail />
      <BrowserRouter>
        <Navigation />
        <div className="app-content">
          <Routes>
          <Route path="/" element={<SpiderManHero />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/honors" element={<HonorsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
