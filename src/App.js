import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Work from './components/Work';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import FullWork from './components/FullWork';
import Achievements from './components/AchievementsScroll';
import Blog from './components/blog';
import './App.css';

const HomePage = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Intro />
      <Work />
      <About />
      <Services />
      <Achievements />
    </main>
    <Footer />
  </>
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/fullwork" element={<FullWork />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  </Router>
);

export default App;
