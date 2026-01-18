// src/App.jsx

import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Importuj wszystkie swoje strony
import { Home } from '../src/Components/Pages/Home';
import About from '../src/Components/Pages/About';
import Regulations from '../src/Components/Pages/Regulations';
import Qa from './Components/Pages/QA'; // Uwaga na nazwę pliku
import Staff from '../src/Components/Pages/Staff';
import Changelog from '../src/Components/Pages/Changelog';
import WarLogs from './Components/WarLogs/WarLogs';
import SecurityLayer from './Components/Security/SecurityLayer';

import LoadingScreen from '../src/Components/LoadingScreen/LoadingScreen';
import LanguageSelector from '../src/Components/LanguageDropdown/LanguageSelector';

function App() {
  const [isLanguageSelected, setIsLanguageSelected] = useState(!!localStorage.getItem('selectedLanguage'));
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Jeśli język jest już wybrany, od razu odpalamy loading
    if (isLanguageSelected) {
      handleStartLoading();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleStartLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  const handleLanguageChosen = () => {
    setIsLanguageSelected(true);
    handleStartLoading();
  };

  if (!isLanguageSelected) {
    return <LanguageSelector onSelect={handleLanguageChosen} forceShow={true} />;
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <SecurityLayer />
      <LanguageSelector />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/regulations" element={<Regulations />} />
          <Route path="/qa" element={<Qa />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/war-logs" element={<WarLogs />} />
          <Route path="/changelog" element={<Changelog />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;