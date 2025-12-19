import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const [showModal, setShowModal] = useState(false);
    const [scrollPos, setScrollPos] = useState(0);

    // === LISTA JĘZYKÓW ===
    // Aby dodać nowy język:
    // 1. Dodaj nowy obiekt do poniższej tablicy
    // 2. Upewnij się, że kod języka (np. 'de') pasuje do pliku w src/Locales/
    // 3. Utwórz plik tłumaczenia: src/Locales/{langCode}.json
    // 4. Dodaj konfigurację w src/i18n.js
    // Przykład: { code: 'fr', name: 'Français', flag: '🇫🇷' }
    const languages = [
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'pl', name: 'Polski', flag: '🇵🇱' },
        // { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
        // { code: 'fr', name: 'Français', flag: '🇫🇷' },
        // { code: 'es', name: 'Español', flag: '🇪🇸' },
        // { code: 'ru', name: 'Русский', flag: '🇷🇺' },
        // { code: 'ja', name: '日本語', flag: '🇯🇵' },
        // { code: 'zh', name: '中文', flag: '🇨🇳' },
    ];

    useEffect(() => {
        const savedLanguage = localStorage.getItem('selectedLanguage');
        if (!savedLanguage) {
            const timer = setTimeout(() => {
                setShowModal(true);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleLanguageSelect = (lang) => {
        localStorage.setItem('selectedLanguage', lang);
        i18n.changeLanguage(lang);
        setShowModal(false);
    };

    const scroll = (direction) => {
        const container = document.querySelector('.language-carousel');
        if (container) {
            const scrollAmount = 150;
            if (direction === 'left') {
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <>
            {showModal && (
                <div className="language-modal-overlay">
                    <div className="language-modal">
                        <h2 className="language-modal-title">SELECT LANGUAGE / WYBIERZ JĘZYK</h2>
                        
                        <div className="language-carousel-wrapper">
                            <button 
                                className="carousel-btn carousel-btn-left"
                                onClick={() => scroll('left')}
                                aria-label="Poprzedni język"
                            >
                                ◀
                            </button>

                            <div className="language-carousel">
                                {languages.map((lang) => (
                                    <button 
                                        key={lang.code}
                                        className="lang-btn"
                                        onClick={() => handleLanguageSelect(lang.code)}
                                    >
                                        <span className="lang-flag">{lang.flag}</span>
                                        <span className="lang-name">{lang.name}</span>
                                    </button>
                                ))}
                            </div>

                            <button 
                                className="carousel-btn carousel-btn-right"
                                onClick={() => scroll('right')}
                                aria-label="Następny język"
                            >
                                ▶
                            </button>
                        </div>

                        <p className="language-hint">💡 {languages.length > 2 ? 'Przesuń aby zobaczyć więcej' : 'Wybierz język aby kontynuować'}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default LanguageSelector;
