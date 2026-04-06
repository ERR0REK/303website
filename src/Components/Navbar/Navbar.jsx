import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageDropdown from '../LanguageDropdown/LanguageDropdown';
import logo from '../../Assets/logo.png';
import './Navbar.css';

const Navbar = () => {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav>
            <div className="nav-container">
                <div className="nav-left">
                    <NavLink to="/">
                        <img src={logo} alt={t('common.orgName')} className='logo' />
                    </NavLink>
                    <NavLink to="/" className='name'>
                        {t('common.orgName')}
                    </NavLink>
                </div>

                <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                <div className={`nav-right ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><NavLink to="/">{t('nav.home')}</NavLink></li>
                        <li><NavLink to="/about">{t('nav.about')}</NavLink></li>
                        <li><NavLink to="/regulations">{t('nav.regulations')}</NavLink></li>
                        <li><NavLink to="/qa">{t('nav.qa')}</NavLink></li>
                        <li><NavLink to="/staff">{t('nav.staff')}</NavLink></li>
                        <li><NavLink to="/history">{t('nav.history', 'HISTORIA')}</NavLink></li>
                        <li><NavLink to="/diplomacy">{t('nav.diplomacy', 'DYPLOMACJA')}</NavLink></li>
                        <li><NavLink to="/kos">{t('nav.kos', 'KOS')}</NavLink></li>
                        <li><NavLink to="/war-logs">{t('nav.warLogs', 'WAR LOGS')}</NavLink></li>
                        <li><NavLink to="/changelog" className="nav-changelog">{t('nav.changelog', 'CHANGELOG')}</NavLink></li>
                    </ul>
                    <div className="nav-lang-mobile">
                        <LanguageDropdown />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;