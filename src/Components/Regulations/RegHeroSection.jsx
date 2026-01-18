// src/Components/Regulations/RegHeroSection.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ShieldAlert, Terminal } from 'lucide-react';

export default function RegHeroSection() {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="reg-hero"
    >
      <div className="hero-decoration">
        <Terminal size={16} />
        <span>PROTOCOL_ENFORCEMENT</span>
      </div>
      <h1 className="reg-hero-title glitch-text" data-text={t('regulations.title')}>
        {t('regulations.title')}
      </h1>
      <p className="reg-hero-subtitle">
        {t('regulations.warning')}
      </p>
      <div className="hero-divider">
        <span></span><ShieldAlert size={20} /><span></span>
      </div>
    </motion.section>
  );
}