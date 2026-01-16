/* src/Components/Pages/About.jsx */

import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../Navbar/Navbar';
import '../About/About.css';
import { motion } from 'framer-motion';

export default function About() {
  const { t } = useTranslation();

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="about-page">
      <Navbar />

      {/* --- Sekcja Hero --- */}
      <motion.section
        className="about-hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="about-hero-title"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {t('about.title')}
        </motion.h1>
        <motion.p
          className="about-hero-subtitle"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {t('about.subtitle')}
        </motion.p>
        <div className="about-hero-divider"></div>
      </motion.section>

      {/* --- Główny kontener treści --- */}
      <main className="about-main-container">

        {/* --- Sekcja: Kim jesteśmy? --- */}
        <motion.section
          className="about-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <h2 className="about-section-title">{t('about.whoAreWe')}</h2>
          <div className="about-content">
            <p>{t('about.whoAreWeContent')}</p>
            <p>{t('about.whoAreWeContent2')}</p>
          </div>
        </motion.section>

        {/* --- Sekcja: Nasza misja --- */}
        <motion.section
          className="about-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <h2 className="about-section-title">{t('about.ourMission')}</h2>
          <div className="about-content">
            <p>{t('about.ourMissionContent')}</p>
            <motion.ul className="about-features-list" variants={listVariants}>
              <motion.li variants={itemVariants}>{t('about.mission1')}</motion.li>
              <motion.li variants={itemVariants}>{t('about.mission2')}</motion.li>
              <motion.li variants={itemVariants}>{t('about.mission3')}</motion.li>
              <motion.li variants={itemVariants}>{t('about.mission4')}</motion.li>
              <motion.li variants={itemVariants}>{t('about.mission5')}</motion.li>
            </motion.ul>
          </div>
        </motion.section>

        {/* --- Sekcja: Wartości --- */}
        <motion.section
          className="about-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <h2 className="about-section-title">{t('about.values')}</h2>
          <div className="about-content">
            <p>{t('about.valuesIntro')}</p>
            <motion.ul className="about-features-list" variants={listVariants}>
              <motion.li variants={itemVariants}><strong>{t('about.value1Title')}</strong>{t('about.value1Content')}</motion.li>
              <motion.li variants={itemVariants}><strong>{t('about.value2Title')}</strong>{t('about.value2Content')}</motion.li>
              <motion.li variants={itemVariants}><strong>{t('about.value3Title')}</strong>{t('about.value3Content')}</motion.li>
              <motion.li variants={itemVariants}><strong>{t('about.value4Title')}</strong>{t('about.value4Content')}</motion.li>
              <motion.li variants={itemVariants}><strong>{t('about.value5Title')}</strong>{t('about.value5Content')}</motion.li>
            </motion.ul>
          </div>
        </motion.section>

        {/* --- Sekcja: Struktura organizacyjna --- */}\
        <motion.section
          className="about-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <h2 className="about-section-title">{t('about.structure')}</h2>
          <div className="about-content">
            <p>{t('about.structureContent')}</p>
            <p>{t('about.structureContent2')}</p>
          </div>
        </motion.section>

        {/* --- Sekcja: Kontakt i Dołącz --- */}\
        <motion.section
          className="about-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <h2 className="about-section-title">{t('about.howToJoin')}</h2>
          <div className="about-content">
            <p>{t('about.howToJoinContent')}</p>
            <button className="about-discord-button" onClick={() => window.open('https://discord.gg/your-link', '_blank')}>
              {t('about.joinDiscord')}
            </button>
            <div style={{ marginTop: '30px' }}>
              <h3>{t('about.contact')}</h3>
              <ul className="about-features-list">
                <li>{t('about.contactDiscord')}</li>
                <li>{t('about.contactRoblox')}</li>
              </ul>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}