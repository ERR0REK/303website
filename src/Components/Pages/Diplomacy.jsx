/* src/Components/Pages/Diplomacy.jsx */

import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../Navbar/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ShieldAlert,
    Handshake,
    ThumbsUp,
    Minus,
    Swords,
    Cpu
} from 'lucide-react';
import DecodedText from '../Shared/DecodedText';
import './Diplomacy.css';

const Diplomacy = () => {
    const { t } = useTranslation();

    // Placeholder data
    const partnerships = [
        { name: "Placeholder Faction", leader: "Unknown" }
    ];

    const friendlyFactions = [
        { name: "Placeholder Faction", leader: "Unknown" }
    ];

    const neutralFactions = [
        { name: "Placeholder Faction", leader: "Unknown" }
    ];

    const enemyFactions = [
        { name: "Placeholder Faction", leader: "Unknown" }
    ];

    const renderFactionGrid = (factions, type, icon) => {
        return (
            <motion.div 
                className="diplo-grid"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.1 }
                    }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
            >
                <AnimatePresence mode="popLayout">
                    {factions.map((faction, index) => (
                        <motion.div
                            key={`${type}-${index}`}
                            className={`diplo-card ${type}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <div className="card-top">
                                <div className="diplo-icon">
                                    {icon}
                                </div>
                            </div>

                            <div className="card-body">
                                <h3 className="faction-name">{faction.name}</h3>
                                {faction.leader && (
                                    <div className="info-row">
                                        <span className="info-label">{t('kos.leaderLabel', 'LEADER')}:</span>
                                        <span className="info-val">{faction.leader}</span>
                                    </div>
                                )}
                            </div>

                            <div className="scan-line"></div>
                            <div className="c-tl"></div><div className="c-tr"></div>
                            <div className="c-bl"></div><div className="c-br"></div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        );
    };

    return (
        <div className="diplo-page">
            <Navbar />
            
            <div className="diplo-bg"></div>
            <div className="diplo-scanlines"></div>

            <header className="diplo-hero">
                <div className="hero-decoration">
                    <Handshake size={16} className="hero-icon" />
                    <span className="hero-tag">SECURITY_CLEARANCE_REQUIRED</span>
                </div>
                
                <h1 className="diplo-title glitch-text" data-text={t('diplomacy.title', 'FACTION RELATIONS')}>
                    <DecodedText text={t('diplomacy.title', 'FACTION RELATIONS')} delay={0.2} />
                </h1>
                
                <p className="diplo-subtitle">
                    {t('diplomacy.subtitle', 'Authenticated readout. Classification of alliances, non-aggression pacts, and active threats.')}
                </p>

                <div className="hero-divider">
                    <span></span><Cpu size={20} /><span></span>
                </div>
            </header>

            <div className="diplo-sections">
                {/* 1. Partnerships */}
                <section className="diplo-section">
                    <div className="section-header">
                        <h2>{t('diplomacy.partnerships')}</h2>
                        <div className="section-divider partnership-div"></div>
                    </div>
                    {partnerships.length > 0 ? renderFactionGrid(partnerships, 'partnership', <Handshake size={24} />) : (
                        <div className="no-results">
                            <ShieldAlert size={48} />
                            <p>{t('diplomacy.noFactions')}</p>
                        </div>
                    )}
                </section>

                {/* 2. Friendly */}
                <section className="diplo-section">
                    <div className="section-header">
                        <h2>{t('diplomacy.friendly')}</h2>
                        <div className="section-divider friendly-div"></div>
                    </div>
                    {friendlyFactions.length > 0 ? renderFactionGrid(friendlyFactions, 'friendly', <ThumbsUp size={24} />) : (
                        <div className="no-results">
                            <ShieldAlert size={48} />
                            <p>{t('diplomacy.noFactions')}</p>
                        </div>
                    )}
                </section>

                {/* 3. Neutral */}
                <section className="diplo-section">
                    <div className="section-header">
                        <h2>{t('diplomacy.neutral')}</h2>
                        <div className="section-divider neutral-div"></div>
                    </div>
                    {neutralFactions.length > 0 ? renderFactionGrid(neutralFactions, 'neutral', <Minus size={24} />) : (
                        <div className="no-results">
                            <ShieldAlert size={48} />
                            <p>{t('diplomacy.noFactions')}</p>
                        </div>
                    )}
                </section>

                {/* 4. Enemy */}
                <section className="diplo-section">
                    <div className="section-header">
                        <h2>{t('diplomacy.enemy')}</h2>
                        <div className="section-divider enemy-div"></div>
                    </div>
                    {enemyFactions.length > 0 ? renderFactionGrid(enemyFactions, 'enemy', <Swords size={24} />) : (
                        <div className="no-results">
                            <ShieldAlert size={48} />
                            <p>{t('diplomacy.noFactions')}</p>
                        </div>
                    )}
                </section>
            </div>

            <footer className="diplo-footer">
                <div className="footer-deco">
                    <Cpu size={14} />
                    <span>SECURE_CONNECTION_ESTABLISHED</span>
                </div>
            </footer>
        </div>
    );
};

export default Diplomacy;
