import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
// import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
// import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Capstone from './pages/Capstone';
import Contact from './pages/Contact';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-[#00111a] text-gray-200 transition-colors duration-300">
          {/* Navbar at the bottom */}
          <Navbar className="fixed bottom-0 left-0 w-full z-50" />
          {/* Main content */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="/skills" element={<Skills />} /> */}
              <Route path="/projects" element={<Projects />} />
              <Route path="/capstone" element={<Capstone />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
