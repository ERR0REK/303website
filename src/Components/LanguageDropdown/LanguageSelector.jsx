import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';

const LanguageSelector = ({ onSelect, forceShow = false }) => {
    const { i18n } = useTranslation();
    const [showModal, setShowModal] = useState(forceShow);

    // === LISTA JĘZYKÓW ===
    // Aby dodać nowy język:
    // 1. Dodaj nowy obiekt do poniższej tablicy
    // 2. Upewnij się, że kod języka (np. 'de') pasuje do pliku w src/Locales/
    // 3. Utwórz plik tłumaczenia: src/Locales/{langCode}.json
    // 4. Dodaj konfigurację w src/i18n.js
    // Przykład: { code: 'fr', name: 'Français', flag: '🇫🇷' }
    const languages = [
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'pl', name: 'Polish', flag: '🇵🇱' },
        // { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
        // { code: 'fr', name: 'Français', flag: '🇫🇷' },
        // { code: 'es', name: 'Español', flag: '🇪🇸' },
        // { code: 'ru', name: 'Русский', flag: '🇷🇺' },
        // { code: 'ja', name: '日本語', flag: '🇯🇵' },
        // { code: 'zh', name: '中文', flag: '🇨🇳' },
    ];

    useEffect(() => {
        if (forceShow) {
            setShowModal(true);
        }
    }, [forceShow]);

    const handleLanguageSelect = (lang) => {
        localStorage.setItem('selectedLanguage', lang);
        i18n.changeLanguage(lang);
        setShowModal(false);
        if (onSelect) onSelect(lang);
    };

    const currentLang = i18n.language;

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
                        {/* HUD Elements */}
                        <div className="lang-hud-tl"></div><div className="lang-hud-tr"></div>
                        <div className="lang-hud-bl"></div><div className="lang-hud-br"></div>

                        <div className="language-header-group">
                            <h2 className="language-modal-title">SELECT INTERFACE LANGUAGE</h2>
                            <p className="language-modal-desc">Unauthorized access restricted. Choose a secure translation uplink to proceed.</p>
                        </div>

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
                                        className={`lang-btn ${currentLang === lang.code ? 'lang-btn-active' : ''}`}
                                        onClick={() => handleLanguageSelect(lang.code)}
                                    >
                                        <span className="lang-flag">{lang.flag}</span>
                                        <span className="lang-name">{lang.name}</span>
                                        {currentLang === lang.code && (
                                            <span className="lang-active-badge">ACTIVE</span>
                                        )}
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

                        <p className="language-hint">💡 {languages.length > 2 ? 'Scroll to see more' : 'Choose a language to continue'}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default LanguageSelector;

/* src/Components/LanguageDropdown/LanguageSelector.jsx */
