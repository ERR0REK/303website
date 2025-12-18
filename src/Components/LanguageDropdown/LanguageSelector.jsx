import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Check if language was already selected
        const savedLanguage = localStorage.getItem('selectedLanguage');
        if (!savedLanguage) {
            // Show modal after a short delay to let LoadingScreen finish
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

    return (
        <>
            {showModal && (
                <div className="language-modal-overlay">
                    <div className="language-modal">
                        <h2 className="language-modal-title">SELECT LANGUAGE / WYBIERZ JĘZYK</h2>
                        <div className="language-buttons">
                            <button 
                                className="lang-btn lang-en"
                                onClick={() => handleLanguageSelect('en')}
                            >
                                <span className="lang-flag">🇬🇧</span>
                                <span className="lang-name">English</span>
                            </button>
                            <button 
                                className="lang-btn lang-pl"
                                onClick={() => handleLanguageSelect('pl')}
                            >
                                <span className="lang-flag">🇵🇱</span>
                                <span className="lang-name">Polski</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default LanguageSelector;
