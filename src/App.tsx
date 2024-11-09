import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import TeamSection from "./components/Team/TeamSection";

import "./styles/App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Blog />} />
        <Route path="/team" element={<TeamSection />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
