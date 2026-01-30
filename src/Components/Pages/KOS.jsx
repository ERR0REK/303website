/* src/Components/Pages/KOS.jsx */

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../Navbar/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Skull,
    Search,
    AlertTriangle,
    Target,
    ShieldAlert,
    Terminal,
    Cpu,
    Eye
} from 'lucide-react';
import DecodedText from '../Shared/DecodedText';
import './KOS.css';

const KOS = () => {
    const { t } = useTranslation();
    const [searchTerm, setSearchTerm] = useState('');

    // Personal Targets (Nicki Osób)
    const personalTargets = [
        {
            name: "???",
            threat: "???",
            reason: t('kos.reason1', '???'),
            lastSeen: "???",
            status: "???"
        },
    ];

    // Faction Targets (Frakcje)
    const factionTargets = [
        {
            name: "???",
            threat: "???",
            reason: t('kos.reason1', '???'),
            lastSeen: "???",
            status: "???"
        },
    ];

    const filteredPersonal = personalTargets.filter(target =>
        target.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredFactions = factionTargets.filter(target =>
        target.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const renderTargetGrid = (targets, sectionType) => {
        return (
            <motion.main 
                className="kos-container"
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
                <div className="kos-grid">
                    <AnimatePresence mode="popLayout">
                        {targets.map((target, index) => (
                            <motion.div
                                key={`${sectionType}-${target.name}`}
                                className={`kos-card ${target.threat.toLowerCase()}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <div className="card-top">
                                    <div className="threat-badge">
                                        <AlertTriangle size={12} />
                                        <span>{target.threat}</span>
                                    </div>
                                    <div className="target-icon">
                                        <Target size={32} />
                                    </div>
                                </div>

                                <div className="card-body">
                                    <h3 className="target-name">{target.name}</h3>
                                    <div className="info-row">
                                        <span className="info-label">{t('kos.reasonLabel', 'REASON')}:</span>
                                        <span className="info-val">{target.reason}</span>
                                    </div>
                                    <div className="info-row">
                                        <span className="info-label">{t('kos.lastSeenLabel', 'LAST_SEEN')}:</span>
                                        <span className="info-val">{target.lastSeen}</span>
                                    </div>
                                    <div className="info-row">
                                        <span className="info-label">{t('kos.statusLabel', 'STATUS')}:</span>
                                        <span className="info-val status-active">{target.status}</span>
                                    </div>
                                </div>

                                <div className="card-footer">
                                    <button className="view-details-btn">
                                        <Eye size={14} />
                                        <span>{t('kos.viewIntel', 'VIEW_INTEL')}</span>
                                    </button>
                                </div>

                                {/* HUD Decorations */}
                                <div className="scan-line"></div>
                                <div className="c-tl"></div><div className="c-tr"></div>
                                <div className="c-bl"></div><div className="c-br"></div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {targets.length === 0 && (
                    <div className="no-results">
                        <ShieldAlert size={48} />
                        <p>{t('kos.noResults', 'NO_MATCHING_THREATS_FOUND_IN_ARCHIVE')}</p>
                    </div>
                )}
            </motion.main>
        );
    };

    return (
        <div className="kos-page">
            <Navbar />

            <div className="kos-overlay"></div>
            <div className="kos-scanlines"></div>

            {/* Hero Section */}
            <section className="kos-hero">
                <div className="hero-decoration">
                    <Skull size={16} className="hero-icon" />
                    <span className="hero-tag">THREAT_IDENTIFICATION_SYSTEM</span>
                </div>
                <h1 className="kos-title glitch-text" data-text={t('kos.title', 'KOS DATABASE')}>
                    <DecodedText text={t('kos.title', 'KOS DATABASE')} delay={0.2} />
                </h1>
                <p className="kos-subtitle">
                    {t('kos.subtitle', 'Official watchlist of individuals and entities posing a threat to Nightfall Squadron.')}
                </p>

                {/* Search Bar */}
                <div className="search-container">
                    <div className="search-box">
                        <Search size={18} className="search-icon" />
                        <input
                            type="text"
                            placeholder={t('kos.search', 'SEARCH_BY_NAME...')}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <div className="search-glow"></div>
                    </div>
                </div>
            </section>

            {/* Personal Targets Section */}
            <section className="kos-section">
                <div className="section-header">
                    <h2>{t('kos.personalSection', 'PERSONAL TARGETS')}</h2>
                    <div className="section-divider"></div>
                </div>
                {filteredPersonal.length > 0 ? renderTargetGrid(filteredPersonal, 'personal') : (
                    <div className="no-results">
                        <ShieldAlert size={48} />
                        <p>{t('kos.noResults', 'NO_MATCHING_THREATS_FOUND_IN_ARCHIVE')}</p>
                    </div>
                )}
            </section>

            {/* Faction Targets Section */}
            <section className="kos-section">
                <div className="section-header">
                    <h2>{t('kos.factionSection', 'FACTION TARGETS')}</h2>
                    <div className="section-divider"></div>
                </div>
                {filteredFactions.length > 0 ? renderTargetGrid(filteredFactions, 'faction') : (
                    <div className="no-results">
                        <ShieldAlert size={48} />
                        <p>{t('kos.noResults', 'NO_MATCHING_THREATS_FOUND_IN_ARCHIVE')}</p>
                    </div>
                )}
            </section>

            <footer className="kos-footer">
                <div className="footer-deco">
                    <Cpu size={14} />
                    <span>SERVER_SCAN_MODE: ACTIVE</span>
                </div>
            </footer>
        </div>
    );
};

export default KOS;
