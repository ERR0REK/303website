import React from 'react'; 
import { useTranslation } from 'react-i18next'; // Importujemy hook do tłumaczeń
import '../Hero/Hero.css';

const Hero = () => {
    const { t } = useTranslation(); // Używamy hooka do tłumaczeń

    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>{t('hero.title')}</h1>
                <p>{t('hero.welcome')}</p>
                <button className='btn'>{t('hero.discord_button')}</button>
            </div>
        </div>
    )
}

export default Hero