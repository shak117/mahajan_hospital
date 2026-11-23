import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Directors } from './pages/Directors';
import { Departments } from './pages/Departments';
import { Facilities } from './pages/Facilities';
import { Contact } from './pages/Contact';

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-hospital-soft text-hospital-charcoal font-sans selection:bg-hospital-navy selection:text-white">
        {/* Navigation */}
        <Navbar />

        {/* Page Routes */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/directors" element={<Directors />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
