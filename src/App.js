import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import SocialWelfare from './pages/SocialWelfare';
import Committee from './pages/Committee';
import Sports from './pages/Sports';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/social" element={<SocialWelfare />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/sports" element={<Sports />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
