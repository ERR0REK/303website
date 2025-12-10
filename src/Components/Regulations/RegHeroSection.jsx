import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function RegHeroSection() {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="reg-hero"
    >
      <h1 className="reg-hero-title">{t('regulations.title')}</h1>
      <p className="reg-hero-subtitle">{t('regulations.warning')}</p>
    </motion.section>
  );
}