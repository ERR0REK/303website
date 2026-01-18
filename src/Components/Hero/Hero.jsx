// src/Components/Hero/Hero.jsx

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
    MessageSquare,
    Youtube,
    Video,
    Terminal,
    Activity,
    ShieldCheck,
    Cpu,
    Wifi,
    Navigation
} from 'lucide-react';
import LinkErrorModal from './LinkErrorModal';
import '../Hero/Hero.css';

const Hero = () => {
    const { t } = useTranslation();
    const [isErrorOpen, setIsErrorOpen] = useState(false);
    const [selectedPlatform, setSelectedPlatform] = useState('');
    const [bootSequence, setBootSequence] = useState(0);

    // Simulation of boot sequence
    useEffect(() => {
        const timer1 = setTimeout(() => setBootSequence(1), 500);
        const timer2 = setTimeout(() => setBootSequence(2), 1000);
        const timer3 = setTimeout(() => setBootSequence(3), 1500);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);

    const links = {
        discord: '',
        youtube: '', // Empty to test error
        tiktok: '',  // Empty to test error
    };

    const handleLinkDispatch = (platform) => {
        const url = links[platform];
        if (url && url !== '') {
            window.open(url, '_blank');
        } else {
            setSelectedPlatform(platform);
            setIsErrorOpen(true);
        }
    };

    return (
        <div className='hero'>
            {/* Background Overlays */}
            <div className="hero-grid-overlay"></div>
            <div className="hero-scanline"></div>

            {/* --- HUD Corners --- */}
            <div className="hud-panel hud-tl">
                <div className="hud-line"></div>
                <div className="hud-data">
                    <div className="data-item">
                        <Activity size={12} />
                        <span>SYSTEM: ONLINE</span>
                    </div>
                    <div className="data-item">
                        <Cpu size={12} />
                        <span>LOAD: 12%</span>
                    </div>
                </div>
            </div>

            <div className="hud-panel hud-tr">
                <div className="hud-line"></div>
                <div className="hud-data">
                    <div className="data-item">
                        <ShieldCheck size={12} />
                        <span>CLEARANCE: LVL_4</span>
                    </div>
                    <div className="data-item status-verified">
                        <Wifi size={12} />
                        <span>LINK: SECURE</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        className="hero-tagline"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: bootSequence >= 1 ? 1 : 0 }}
                    >
                        <Terminal size={14} />
                        <span>FACTION_MAIN_TERMINAL_v4.0.1</span>
                    </motion.div>

                    <motion.h1
                        className="glitch-text"
                        data-text={t('hero.title')}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: bootSequence >= 2 ? 1 : 0, scale: bootSequence >= 2 ? 1 : 0.9 }}
                    >
                        {t('hero.title')}
                    </motion.h1>

                    <motion.div
                        className="hero-desc-wrapper"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: bootSequence >= 3 ? 1 : 0, y: bootSequence >= 3 ? 0 : 20 }}
                    >
                        <div className="bio-border"></div>
                        <p>{t('hero.welcome')}</p>
                    </motion.div>

                    <motion.div
                        className="hero-buttons-group"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: bootSequence >= 3 ? 1 : 0 }}
                    >
                        <button className='btn btn-discord' onClick={() => handleLinkDispatch('discord')}>
                            <MessageSquare size={18} />
                            <span>{t('hero.discord_button')}</span>
                        </button>
                        <button className='btn btn-youtube' onClick={() => handleLinkDispatch('youtube')}>
                            <Youtube size={18} />
                            <span>{t('hero.youtube_button')}</span>
                        </button>
                        <button className='btn btn-tiktok' onClick={() => handleLinkDispatch('tiktok')}>
                            <Video size={18} />
                            <span>{t('hero.tiktok_button')}</span>
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* --- Mission Ticker --- */}
            <div className="mission-ticker">
                <div className="ticker-label">
                    <Navigation size={14} />
                    <span>LIVE_OS_INTEL</span>
                </div>
                <div className="ticker-content">
                    <div className="ticker-track">
                        <span>{"// TRAINING OPERATIONS: ACTIVE"}</span>
                        <span>{"// UNIT RECRUITMENT: OPEN"}</span>
                        <span>{"// SERVER STATUS: OPTIMAL"}</span>
                        <span>{"// LATEST INTEL: InterPolishForces DEPLOYED"}</span>
                        <span>{"// ENCRYPTION: MIL-SPEC_V2"}</span>
                        {/* Duplicate for seamless loop */}
                        <span>{"// TRAINING OPERATIONS: ACTIVE"}</span>
                        <span>{"// UNIT RECRUITMENT: OPEN"}</span>
                        <span>{"// SERVER STATUS: OPTIMAL"}</span>
                        <span>{"// LATEST INTEL: InterPolishForces DEPLOYED"}</span>
                        <span>{"// ENCRYPTION: MIL-SPEC_V2"}</span>
                    </div>
                </div>
            </div>

            {/* --- Link Dispatcher Modal --- */}
            <LinkErrorModal
                isOpen={isErrorOpen}
                onClose={() => setIsErrorOpen(false)}
                platform={selectedPlatform}
            />
        </div>
    );
};

export default Hero;