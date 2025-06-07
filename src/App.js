import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Committee from './pages/Committee';
import Education from './pages/Education';
import Programs from './pages/Programs';
import About from './pages/About';
import Sports from './pages/Sports';
import Environment from './pages/Enivronment';
import SocialWelfare from './pages/SocialWelfare';
import Gallery from './pages/Gallery';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Committee" element={<Committee />} />
        <Route path="/education" element={<Education />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/environment" element={<Environment />} />
        <Route path="/welfare" element={<SocialWelfare />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Programs" element={<Programs />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
