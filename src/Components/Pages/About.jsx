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
        <h1 className="about-hero-title">{t('about.title', 'CZYM JEST 303RD DIVISION?')}</h1>
        <p className="about-hero-subtitle">
          {t('about.subtitle', 'Poznaj naszą historię, misję i jak dołączyć do naszej społeczności')}
        </p>
        <div className="about-hero-divider"></div>
      </section>

      {/* --- Główny kontener treści --- */}
      <main className="about-main-container">
        {/* --- Sekcja: Kim jesteśmy? --- */}
        <section className="about-section">
          <h2 className="about-section-title">{t('about.whoAreWe', 'Kim jesteśmy?')}</h2>
          <div className="about-content">
            <p>
              {t(
                'about.whoAreWeContent',
                '303rd Division to dynamiczna i profesjonalna organizacja militarna działająca na serwerze Roblox. Jesteśmy zaangażowani w tworzenie przyjaznego, zdyscyplinowanego i zainteresowanego wspólnotą graczy.'
              )}
            </p>
            <p>
              {t(
                'about.whoAreWeContent2',
                'Nasze członkowie pochodzą z różnych części świata, ale łączy nas wspólna pasja do gier i zainteresowanie wojskowością. Tworzymy środowisko, gdzie każdy może się rozwijać i osiągać swoje cele.'
              )}
            </p>
          </div>
        </section>

        {/* --- Sekcja: Nasza misja --- */}
        <section className="about-section">
          <h2 className="about-section-title">{t('about.ourMission', 'Nasza misja')}</h2>
          <div className="about-content">
            <p>
              {t(
                'about.ourMissionContent',
                'Misją 303rd Division jest budowanie silnej, zorganizowanej i szanującej się nawzajem społeczności graczy. Dążymy do:'
              )}
            </p>
            <ul className="about-features-list">
              <li>{t('about.mission1', 'Zapewniania pozytywnego doświadczenia na serwerze')}</li>
              <li>{t('about.mission2', 'Wspierania nowych członków w ich rozwoju')}</li>
              <li>{t('about.mission3', 'Organizowania zdarzeń i operacji dla całej frakcji')}</li>
              <li>{t('about.mission4', 'Utrzymywania wysokich standardów profesjonalizmu i etyki')}</li>
              <li>{t('about.mission5', 'Tworzenia przyjaznego i bezpiecznego środowiska dla graczy')}</li>
            </ul>
          </div>
        </section>

        {/* --- Sekcja: Wartości --- */}
        <section className="about-section">
          <h2 className="about-section-title">{t('about.values', 'Nasze wartości')}</h2>
          <div className="about-content">
            <p>
              {t(
                'about.valuesIntro',
                'Działania 303rd Division opierają się na następujących fundamentalnych wartościach:'
              )}
            </p>
            <ul className="about-features-list">
              <li>
                <strong>{t('about.value1Title', 'Szacunek')}</strong>
                {t(
                  'about.value1Content',
                  ' - Szanujemy każdego członka naszej społeczności niezależnie od jego pozycji.'
                )}
              </li>
              <li>
                <strong>{t('about.value2Title', 'Dyscyplina')}</strong>
                {t(
                  'about.value2Content',
                  ' - Wierzymy, że dyscyplina jest kluczem do sukcesu i harmonii w grupie.'
                )}
              </li>
              <li>
                <strong>{t('about.value3Title', 'Wspólnota')}</strong>
                {t(
                  'about.value3Content',
                  ' - Pracujemy razem dla wspólnego dobra i wspieramy się nawzajem.'
                )}
              </li>
              <li>
                <strong>{t('about.value4Title', 'Przejrzystość')}</strong>
                {t(
                  'about.value4Content',
                  ' - Komunikujemy się otwarcie i uczciwą z naszymi członkami.'
                )}
              </li>
              <li>
                <strong>{t('about.value5Title', 'Zaangażowanie')}</strong>
                {t(
                  'about.value5Content',
                  ' - Każdy członek jest zaangażowany w działania 303rd Division.'
                )}
              </li>
            </ul>
          </div>
        </section>

        {/* --- Sekcja: Struktura organizacyjna --- */}
        <section className="about-section">
          <h2 className="about-section-title">{t('about.structure', 'Struktura organizacyjna')}</h2>
          <div className="about-content">
            <p>
              {t(
                'about.structureContent',
                '303rd Division ma dobrze zdefiniowaną strukturę z różnymi rolami i stanowiskami. Od Faction Command na szczycie po Trial Moderators, każda rola jest ważna i wspiera ogólne funkcjonowanie organizacji.'
              )}
            </p>
            <p>
              {t(
                'about.structureContent2',
                'Aby dowiedzieć się więcej o naszych rolach i członkach kadry, odwiedź stronę "Kadra".'
              )}
            </p>
          </div>
        </section>

        {/* --- Sekcja: Jak dołączyć --- */}
        <section className="about-section">
          <h2 className="about-section-title">{t('about.howToJoin', 'Jak dołączyć do nas?')}</h2>
          <div className="about-content">
            <p>
              {t(
                'about.howToJoinContent',
                'Jeśli jesteś zainteresowany dołączeniem do 303rd Division, tutaj są podstawowe kroki:'
              )}
            </p>
            <ul className="about-features-list">
              <li>{t('about.step1', 'Wejdź na nasz serwer Roblox i zapoznaj się z naszymi regulaminami')}</li>
              <li>{t('about.step2', 'Dołącz do naszego serwera Discord aby być w kontakcie z społecznością')}</li>
              <li>{t('about.step3', 'Zwróć się do członka administracji z prośbą o zaproszenie do frakcji')}</li>
              <li>{t('about.step4', 'Przejdź przez proces weryfikacji i poznaj pozostałych członków')}</li>
              <li>{t('about.step5', 'Zacznij nową przygodę z 303rd Division!')}</li>
            </ul>
            <button className="about-discord-button" onClick={() => window.open('https://discord.gg/your-link', '_blank')}>
              {t('about.joinDiscord', 'Dołącz na Discorda')}
            </button>
          </div>
        </section>

        {/* --- Sekcja: Kontakt --- */}
        <section className="about-section">
          <h2 className="about-section-title">{t('about.contact', 'Kontakt')}</h2>
          <div className="about-content">
            <p>
              {t(
                'about.contactContent',
                'Jeśli masz pytania lub chcesz się skontaktować z administracją, możesz to zrobić poprzez:'
              )}
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