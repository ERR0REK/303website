// src/Components/Hero/Hero.jsx

import React from 'react';
import { useTranslation } from 'react-i18next'; // Importujemy hook do tłumaczeń
import '../Hero/Hero.css';

const Hero = () => {
    const { t } = useTranslation(); // Używamy hooka do tłumaczeń

    const openDiscord = () => {
        window.open('https://discord.gg/6dptZnyTf5', '_blank');
    };

    const openYouTube = () => {
        // TODO: Zastąp tym linkiem na swój YouTube kanał
        window.open('https://www.youtube.com/@ShadowAbyssalX', '_blank');
    };

    const openTikTok = () => {
        // TODO: Zastąp tym linkiem na swój TikTok profil
        window.open('https://www.tiktok.com/@shadowabyssalx', '_blank');
    };

    return (
        <div className='hero'>
            <div className="container">
                <div className="hero-text">
                    <h1>{t('hero.title')}</h1>
                    <p>{t('hero.welcome')}</p>
                    <div className="hero-buttons-group">
                        <button className='btn' onClick={openDiscord}>{t('hero.discord_button')}</button>
                        <button className='btn btn-youtube' onClick={openYouTube}>{t('hero.youtube_button')}</button>
                        <button className='btn btn-tiktok' onClick={openTikTok}>{t('hero.tiktok_button')}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero