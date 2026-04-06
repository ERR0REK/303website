import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../LanguageDropdown/LanguageDropdown.css';

const LanguageDropdown = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('i18nextLng', lng);
        setIsOpen(false); 
    };

    const languages = [
        { code: 'pl', name: 'Polski', flag: '🇵🇱' },
        { code: 'en', name: 'English', flag: '🇬🇧' },
    ];

    const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

    return (
        <div 
            className="language-dropdown"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button className="dropdown-button">
                <span className="flag">{currentLanguage.flag}</span>
                <span className="lang-name">{currentLanguage.name}</span>
                <span className={`arrow ${isOpen ? 'open' : ''}`}></span>
            </button>
            <ul className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
                {languages.map((lang) => (
                    <li key={lang.code} onClick={() => changeLanguage(lang.code)}>
                        <span className="flag">{lang.flag}</span>
                        <span className="lang-name">{lang.name}</span>
                    </li>
                ))}
                <li className="divider"></li>
                <li className="help-translate" onClick={() => window.open('https://crowdin.com/project/twoj-projekt', '_blank')}>
                    <span className="icon">🌐</span>
                    <span className="lang-name">{i18n.t('langDropdown.helpTranslate')}</span>
                </li>
            </ul>
        </div>
    );
};

export default LanguageDropdown;