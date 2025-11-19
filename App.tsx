import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorkGrid } from './components/WorkGrid';
import { ProjectDetail } from './components/ProjectDetail';
import { Contact } from './components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <WorkGrid />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<WorkGrid />} />
          <Route path="/work/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
