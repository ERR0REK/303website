import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from '../src/Components/Pages/Home';
import About from '../src/Components/Pages/About';
import Regulations from '../src/Components/Pages/Regulations';
import Qa from './Components/Pages/QA'; 
import Staff from '../src/Components/Pages/Staff';
import Changelog from '../src/Components/Pages/Changelog';
import WarLogs from './Components/WarLogs/WarLogs';
import SecurityLayer from './Components/Security/SecurityLayer';
import AuthGuard from './Components/Auth/AuthGuard';
import DiscordCallback from './Components/Auth/DiscordCallback';
import History from './Components/Pages/History';
import KOS from './Components/Pages/KOS';
import Diplomacy from './Components/Pages/Diplomacy';

import LoadingScreen from '../src/Components/LoadingScreen/LoadingScreen';
import LanguageSelector from '../src/Components/LanguageDropdown/LanguageSelector';
import SpaceBackground from './Components/Shared/SpaceBackground';

function App() {
  const [isLanguageSelected, setIsLanguageSelected] = useState(!!localStorage.getItem('selectedLanguage'));
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('selectedLanguage')) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
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
  
  if (window.location.hash.includes('access_token=')) {
    return (
      <Router>
        <Routes>
          <Route path="/*" element={<DiscordCallback />} />
        </Routes>
      </Router>
    );
  }

  return (
    <>
      <SpaceBackground />
      <SecurityLayer />
      <LanguageSelector />
      <Router>
        <Routes>
          {/* Public Auth Callback - Wildcard to handle appended Discord fragments */}
          <Route path="/auth/callback" element={<DiscordCallback />} />

          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/regulations" element={<Regulations />} />
          <Route path="/qa" element={<Qa />} />
          <Route path="/history" element={<History />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/staff" element={<Staff />}/>

          {/* Protected Routes */}
          <Route path="/diplomacy" element={<AuthGuard><Diplomacy /></AuthGuard>} />
          <Route path="/kos" element={<AuthGuard><KOS /></AuthGuard>} />
          <Route path="/war-logs" element={<AuthGuard><WarLogs /></AuthGuard>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;