/* src/Components/Pages/Changelog.jsx */

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Navbar from '../Navbar/Navbar';
import '../Changelog/Changelog.css';

export default function Changelog() {
  const { t } = useTranslation();
  const [expandedVersion, setExpandedVersion] = useState(null);

  // === CHANGELOG DATA ===
  const changelogData = t('changelog.data', { returnObjects: true }) || [];

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
          {t('changelog.subtitle', 'Zobacz historię zmian i aktualizacji Shadow Abyssal X')}
        </p>
      </section>

      {/* Changelog Timeline */}
      <main className="changelog-container">
        <div className="changelog-timeline">
          {changelogData.map((entry, index) => (
            <motion.div
              key={entry.version}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`changelog-entry ${entry.highlight ? 'highlight' : ''}`}
            >
              <div
                className="changelog-header"
                onClick={() => setExpandedVersion(expandedVersion === entry.version ? null : entry.version)}
              >
                <div className="version-info">
                  <h2 className="version-number">v{entry.version}</h2>
                  <span className="version-date">{entry.date}</span>
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
          <p>{t('changelog.footer.thankYou')}</p>
          <p>{t('changelog.footer.suggest')}</p>
        </footer>
      </main>
    </div>
  );
}
