/* src/Components/Pages/Changelog.jsx */

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Navbar from '../Navbar/Navbar';
import '../Changelog/Changelog.css';

export default function Changelog() {
  const { t, i18n } = useTranslation();
  const [expandedVersion, setExpandedVersion] = useState(null);
  const [activeCategory, setActiveCategory] = useState('dev');
  const [devVersions, setDevVersions] = useState([]);
  const [releaseVersions, setReleaseVersions] = useState([]);

  // Load versions from i18n on mount and language change
  useEffect(() => {
    const devData = i18n.getResourceBundle(i18n.language, 'translation')?.changelog?.dev;
    const releaseData = i18n.getResourceBundle(i18n.language, 'translation')?.changelog?.release;
    
    if (Array.isArray(devData)) setDevVersions(devData);
    if (Array.isArray(releaseData)) setReleaseVersions(releaseData);
  }, [i18n.language]);

  const currentVersions = activeCategory === 'dev' ? devVersions : releaseVersions;

  const getIcon = (type) => {
    const icons = {
      'feature': '✨',
      'bugfix': '🐛',
      'improvement': '⚡',
      'security': '🔒'
    };
    return icons[type] || '📝';
  };

  return (
    <div className="changelog-page">
      <Navbar />

      {/* Hero Section */}
      <section className="changelog-hero">
        <h1 className="changelog-title">{t('changelog.title', 'CHANGELOG')}</h1>
        <p className="changelog-subtitle">
          {t('changelog.subtitle', 'See the history of changes and updates to InterPolishForces')}
        </p>
      </section>

      {/* Category Tabs */}
      <section className="changelog-tabs">
        <button
          className={`tab-button ${activeCategory === 'dev' ? 'active' : ''}`}
          onClick={() => setActiveCategory('dev')}
        >
          <span className="tab-icon">⚙️</span>
          <span className="tab-label">{t('changelog.tabs.dev', 'DEV Versions')}</span>
        </button>
        <button
          className={`tab-button ${activeCategory === 'release' ? 'active' : ''}`}
          onClick={() => setActiveCategory('release')}
        >
          <span className="tab-icon">🚀</span>
          <span className="tab-label">{t('changelog.tabs.release', 'Release Versions')}</span>
        </button>
      </section>

      {/* Changelog Timeline */}
      <main className="changelog-container">
        <div className="changelog-timeline">
          {currentVersions.map((entry, index) => (
            <motion.div
              key={entry.version}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`changelog-entry ${entry.type}`}
            >
              <div
                className="changelog-header"
                onClick={() => setExpandedVersion(expandedVersion === entry.version ? null : entry.version)}
              >
                <div className="version-info">
                  <h2 className="version-number">v{entry.version}</h2>
                  <span className="version-date">{entry.date}</span>
                  <span className={`version-badge ${entry.type || activeCategory}`}>
                    {t(`changelog.badges.${entry.type || activeCategory}`, (entry.type || activeCategory).toUpperCase())}
                  </span>
                </div>
                <div className="expand-icon">
                  {expandedVersion === entry.version ? '▼' : '▶'}
                </div>
              </div>

              {expandedVersion === entry.version && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="changelog-changes"
                >
                  {entry.changes.map((change, changeIndex) => (
                    <div key={changeIndex} className={`change-item change-${change.type}`}>
                      <span className="change-icon">{getIcon(change.type)}</span>
                      <div className="change-content">
                        <h3 className="change-title">{change.title}</h3>
                        <p className="change-description">{change.description}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <footer className="changelog-footer">
          <p>{t('changelog.footer.thankYou', 'Thank you for following our development!')}</p>
          <p>{t('changelog.footer.suggest', 'Have suggestions? Join our Discord!')}</p>
        </footer>
      </main>
    </div>
  );
}
