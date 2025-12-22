/* src/Components/Pages/QA.jsx */

import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../Navbar/Navbar';
import QAItem from '../QA/QAItem';
import '../QA/QA.css';

export default function Qa() {
  const { t } = useTranslation();

  // ===== WIP: PYTANIA I ODPOWIEDZI =====
  // TODO: Dodaj własne pytania i odpowiedzi dla FAQ
  // Poniższy kod jest zakomentowany - jak będziesz miał pomysł na pytania,
  // możesz go rozkmentować i przerobić z oryginalnym kodem
  
  /*
  // Pytania i odpowiedzi - można je przenieść do tłumaczeń
  const faqs = [
    {
      question: t('qa.faqs.0.question', 'Jak mogę dołączyć do 303rd Division?'),
      answer: t('qa.faqs.0.answer', 'Aby dołączyć do naszej frakcji, musisz wejść na nasz serwer Roblox i poprosić o zaproszenie. Zwróć się do dowolnego członka administracji z wymaganą dokumentacją.'),
    },
    {
      question: t('qa.faqs.1.question', 'Jakie wymagania muszę spełnić?'),
      answer: t('qa.faqs.1.answer', 'Wymagania mogą się różnić w zależności od roli, którą chcesz pełnić. Zasadniczo musisz być aktywny, szanować regulamin i posiadać mikrofon do komunikacji na serwerze.'),
    },
    {
      question: t('qa.faqs.2.question', 'Jak zgłaszam problem lub złamanie regulaminu?'),
      answer: t('qa.faqs.2.answer', 'Możesz zgłosić problem poprzez system ticketów na naszym serwerze Discord lub bezpośrednio poinformować administrację. Podaj możliwie szczegółowe informacje o incydencie.'),
    },
    {
      question: t('qa.faqs.3.question', 'Czy mogę odwołać się od bana?'),
      answer: t('qa.faqs.3.answer', 'Tak, możesz odwołać się od bana poprzez wysłanie formalnej wiadomości do administracji. Przygotuj uzasadnienie, dlaczego uważasz, że decyzja była niesprawiedliwa.'),
    },
    {
      question: t('qa.faqs.4.question', 'Jaki język jest używany na serwerze?'),
      answer: t('qa.faqs.4.answer', 'Głównie używamy języka polskiego i angielskiego. Wszyscy członkowie powinni być w stanie posługiwać się co najmniej jednym z tych języków na zadowalającym poziomie.'),
    },
    {
      question: t('qa.faqs.5.question', 'Czy jest wymagany wiek minimalny?'),
      answer: t('qa.faqs.5.answer', 'Chociaż nie mamy ściśle określonego minimalnego wymogu wiekowego, zalecamy, aby członkowie mieli co najmniej 13 lat i wykazywali dojrzałość.'),
    },
    {
      question: t('qa.faqs.6.question', 'Jak się awansuje na wyższą rangę?'),
      answer: t('qa.faqs.6.answer', 'Awansowanie zależy od aktywności, zaangażowania i zademonstrowania umiejętności. Administracja będzie obserwować twoje postępy i rozpatry awans w odpowiednim czasie.'),
    },
    {
      question: t('qa.faqs.7.question', 'Czy mogę być moderatorem lub administratorem?'),
      answer: t('qa.faqs.7.answer', 'Tak, jest to możliwe. Musisz wykazać się odpowiednimi umiejętnościami, byciem godnym zaufania i aktywnym członkiem zespołu. Odpowiednia osoba z administracji powinna Cię zaproponować.'),
    },
  ];
  */

  // Na razie pusty array - dodaj pytania gdy będziesz miał pomysł
  const faqs = [];

  return (
    <div className="qa-page">
      <Navbar />

      {/* --- Sekcja Hero --- */}
      <section className="qa-hero-section">
        <h1 className="qa-hero-title">{t('qa.title', 'WORK IN PROGRESS')}</h1>
        <p className="qa-hero-subtitle">
          {t('qa.subtitle', 'Ta sekcja jest w trakcie przebudowy - wróć wkrótce!')}
        </p>
        <div className="qa-hero-divider"></div>
      </section>

      {/* --- Główny kontener treści --- */}
      <main className="qa-main-container">
        <div className="qa-faq-container">
          {faqs && faqs.length > 0 ? (
            faqs.map((faq, index) => (
              <QAItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))
          ) : (
            <p className="qa-no-items">{t('qa.noItems', 'Brak pytań do wyświetlenia')}</p>
          )}
        </div>
      </main>
    </div>
  );
}