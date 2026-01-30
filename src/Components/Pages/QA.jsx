/* src/Components/Pages/QA.jsx */

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  ChevronUp,
  Cpu,
  Terminal,
  Search,
  BookOpen
} from 'lucide-react';
import Navbar from '../Navbar/Navbar';
import '../QA/QA.css';

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className={`qa-item ${isOpen ? 'active' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <button
        className="qa-question"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="q-tag">Q_{index + 1}</div>
        <span className="q-text">{question}</span>
        <div className="q-icon">
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="qa-answer-wrapper"
          >
            <div className="qa-answer">
              <div className="a-tag">SYSTEM_RESPONSE</div>
              <div className="a-content">{answer}</div>
              <div className="a-decoration"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="qa-glow"></div>
    </motion.div>
  );
};

export default function Qa() {
  const { t } = useTranslation();

  // FAQ Data - Moved into component for reactivity
  const faqs = [
    {
      question: t('qa.faqs.0.question', 'Jak mogę dołączyć do Nightfall Squadron?'),
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

  return (
    <div className="qa-page">
      <Navbar />

      <div className="qa-overlay"></div>
      <div className="qa-scanlines"></div>

      {/* --- Hero Section --- */}
      <section className="qa-hero">
        <div className="hero-decoration">
          <Search size={16} />
          <span>KNOWLEDGE_BASE_v2.0</span>
          <Cpu size={16} />
        </div>
        <h1 className="qa-title glitch-text" data-text={t('qa.title', 'FAQ')}>
          {t('qa.title', 'FAQ')}
        </h1>
        <p className="qa-subtitle">
          {t('qa.subtitle', 'Najczęściej zadawane pytania i odpowiedzi dotyczące Nightfall Squadron')}
        </p>
        <div className="hero-divider">
          <span></span><Terminal size={20} /><span></span>
        </div>
      </section>

      {/* --- FAQ List --- */}
      <main className="qa-container">
        <div className="qa-list-header">
          <BookOpen size={20} />
          <h2>{t('qa.availableFaqs', 'DOSTĘPNE INFORMACJE')}</h2>
        </div>

        <div className="qa-faq-list">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>
      </main>

      <footer className="qa-footer">
        <div className="footer-deco">
          <span></span><span></span><span></span>
        </div>
      </footer>
    </div>
  );
}