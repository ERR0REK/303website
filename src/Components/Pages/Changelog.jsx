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
  // Format: { version, date, changes: [{ type, title, description }] }
  // Types: 'feature' (✨), 'bugfix' (🐛), 'improvement' (⚡), 'security' (🔒)
  const changelogData = [
    {
      version: '1.5.0',
      date: '19 grudnia 2025',
      highlight: true,
      changes: [
        {
          type: 'feature',
          title: 'Language Carousel',
          description: 'Nowy system wyboru języka z suwakiem dla przyszłych języków'
        },
        {
          type: 'feature',
          title: 'Social Media Links',
          description: 'Dodane linki do YouTube i TikTok na stronie głównej'
        },
        {
          type: 'improvement',
          title: 'Regulations Banner',
          description: 'Prominentny baner "Regulamin serwera" na górze strony Regulamin'
        },
        {
          type: 'improvement',
          title: 'Performance Optimization',
          description: 'Zmniejszona FPS animacji tła w Regulaminie (6.67 FPS) dla lepszej wydajności'
        },
        {
          type: 'feature',
          title: 'Anti-Cheat Measures',
          description: 'Zabezpieczenie przed inspekcją kodu (F12, prawe kliknięcie)'
        },
        {
          type: 'improvement',
          title: 'Text Selection',
          description: 'Wyłączony user-select na całej stronie dla lepszego UX'
        }
      ]
    },
  ];

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
          <p>💚 Dziękujemy za używanie Shadow Abyssal X!</p>
          <p>Chcesz zasugerować nową funkcję? Skontaktuj się z nami na Discord!</p>
        </footer>
      </main>
    </div>
  );
}
