/* src/Components/Pages/About.jsx */

import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../Navbar/Navbar';
import '../About/About.css';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <Navbar />

      {/* --- Sekcja Hero --- */}
      <section className="about-hero-section">
        <h1 className="about-hero-title">{t('about.title')}</h1>
        <p className="about-hero-subtitle">
          {t('about.subtitle')}
        </p>
        <div className="about-hero-divider"></div>
      </section>

      {/* --- Główny kontener treści --- */}
      <main className="about-main-container">
        {/* --- Sekcja: Kim jesteśmy? --- */}
        <section className="about-section">
          <h2 className="about-section-title">{t('about.whoAreWe')}</h2>
          <div className="about-content">
            <p>
              {t('about.whoAreWeContent')}
            </p>
            <p>
              {t('about.whoAreWeContent2')}
            </p>
          </div>
        </section>

        {/* --- Sekcja: Nasza misja --- */}
        <section className="about-section">
          <h2 className="about-section-title">{t('about.ourMission')}</h2>
          <div className="about-content">
            <p>
              {t('about.ourMissionContent')}
            </p>
            <ul className="about-features-list">
              <li>{t('about.mission1')}</li>
              <li>{t('about.mission2')}</li>
              <li>{t('about.mission3')}</li>
              <li>{t('about.mission4')}</li>
              <li>{t('about.mission5')}</li>
            </ul>
          </div>
        </section>

        {/* --- Sekcja: Wartości --- */}
        <section className="about-section">
          <h2 className="about-section-title">{t('about.values')}</h2>
          <div className="about-content">
            <p>
              {t('about.valuesIntro')}
            </p>
            <ul className="about-features-list">
              <li>
                <strong>{t('about.value1Title')}</strong>
                {t('about.value1Content')}
              </li>
              <li>
                <strong>{t('about.value2Title')}</strong>
                {t('about.value2Content')}
              </li>
              <li>
                <strong>{t('about.value3Title')}</strong>
                {t('about.value3Content')}
              </li>
              <li>
                <strong>{t('about.value4Title')}</strong>
                {t('about.value4Content')}
              </li>
              <li>
                <strong>{t('about.value5Title')}</strong>
                {t('about.value5Content')}
              </li>
            </ul>
          </div>
        </section>

        {/* --- Sekcja: Struktura organizacyjna --- */}
        <section className="about-section">
          <h2 className="about-section-title">{t('about.structure')}</h2>
          <div className="about-content">
            <p>
              {t('about.structureContent')}
            </p>
            <p>
              {t('about.structureContent2')}
            </p>
          </div>
        </section>

        {/* --- Sekcja: Jak dołączyć --- */}
        <section className="about-section">
          <h2 className="about-section-title">{t('about.howToJoin')}</h2>
          <div className="about-content">
            <p>
              {t('about.howToJoinContent')}
            </p>
            <ul className="about-features-list">
              <li>{t('about.step1')}</li>
              <li>{t('about.step2')}</li>
              <li>{t('about.step3')}</li>
              <li>{t('about.step4')}</li>
              <li>{t('about.step5')}</li>
            </ul>
            <button className="about-discord-button" onClick={() => window.open('https://discord.gg/your-link', '_blank')}>
              {t('about.joinDiscord')}
            </button>
          </div>
        </section>

        {/* --- Sekcja: Kontakt --- */}
        <section className="about-section">
          <h2 className="about-section-title">{t('about.contact')}</h2>
          <div className="about-content">
            <p>
              {t('about.contactContent')}
            </p>
            <ul className="about-features-list">
              <li>{t('about.contactDiscord')}</li>
              <li>{t('about.contactRoblox')}</li>
              <li>{t('about.contactWebsite')}</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}