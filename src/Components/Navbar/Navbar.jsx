// src/Components/Navbar/Navbar.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageDropdown from '../LanguageDropdown/LanguageDropdown';
import logo from '../../Assets/logo.png';
import './Navbar.css';

const Navbar = () => {
    const { t } = useTranslation();
    
    return (
        <nav>
            {/* --- LEWA STRONA (Logo i Nazwa) --- */}
            <div className="nav-left">
                <NavLink to="/">
                    <img src={logo} alt="303rd Division Logo" className='logo' />
                </NavLink>
                <NavLink to="/" className='name'>
                    Shadow Abyssal X
                </NavLink>
            </div>

            {/* --- PRAWA STRONA (Linki i Dropdown) --- */}
            <div className="nav-right">
                <ul>
                    <li><NavLink to="/">{t('nav.home')}</NavLink></li>
                    <li><NavLink to="/about">{t('nav.about')}</NavLink></li>
                    <li><NavLink to="/regulations">{t('nav.regulations')}</NavLink></li>
                    <li><NavLink to="/qa">{t('nav.qa')}</NavLink></li>
                    <li><NavLink to="/staff">{t('nav.staff')}</NavLink></li>
                </ul>
                <LanguageDropdown />
            </div>
        </nav>
    );
};

export default Navbar;