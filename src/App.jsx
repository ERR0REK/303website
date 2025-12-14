// src/App.jsx

import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Importuj wszystkie swoje strony
import { Home } from '../src/Components/Pages/Home';
import About from '../src/Components/Pages/About';
import Regulations from '../src/Components/Pages/Regulations';
import Qa from './Components/Pages/QA'; // Uwaga na nazwę pliku
import Staff from '../src/Components/Pages/Staff';

import LoadingScreen from '../src/Components/LoadingScreen/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <Routes>
        {/* Definiuj trasy dla każdej podstrony */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/regulations" element={<Regulations />} />
        <Route path="/qa" element={<Qa />} />
        <Route path="/staff" element={<Staff />} />
      </Routes>
    </Router>
  );
}

export default App;