// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AboutPage from './components/AboutPage';
import Contact from './components/Contact';
import NotFound from './components/NotFound'; // Importer le composant 404
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 3 secondes de chargement

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div>
   
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} /> {/* Route catch-all pour 404 */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
