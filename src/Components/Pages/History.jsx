/* src/Components/Pages/History.jsx */

import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
import {
    //Calendar,
    History as HistoryIcon,
    //Search,
    Sword,
    Shield,
    Flag,
    Target,
    //Terminal,
    Cpu
} from 'lucide-react';
import DecodedText from '../Shared/DecodedText';
import './History.css';

const History = () => {
    const { t } = useTranslation();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const timelineEvents = [
        {
            year: "2022 - Maj 2024",
            title: t('history.event1.title', 'INITIATION_PROTOCOL'),
            content: t('history.event1.content', 'The first division was formed under the codename Nightfall Squadron.'),
            icon: <Flag size={20} />
        },
        {
            year: "Połowa 2024",
            title: t('history.event2.title', 'FIRST_DEPLOYMENT'),
            content: t('history.event2.content', 'Engagement in the first major operation.'),
            icon: <Shield size={20} />
        },
        {
            year: "Wrzesień 2024 - Listopad 2024",
            title: t('history.event3.title', 'FORTIFICATION_PHASE'),
            content: t('history.event3.content', 'Expansion of the digital database.'),
            icon: <Sword size={20} />
        },
        {
            year: "Grudzień 2024 - Styczeń 2025",
            title: t('history.event4.title', 'COMMAND_ASCENSION'),
            content: t('history.event4.content', 'Modernization of the Web-Command interface.'),
            icon: <Target size={20} />
        },
        {
            year: "Początek 2025 - 1 Listopada 2025",
            title: t('history.event5.title', 'DSX_ERA'),
            content: t('history.event5.content', 'Death Squadron X'),
            icon: <Sword size={20} />
        },
        {
            year: "Grudzień 2025",
            title: t('history.event6.title', '303RD_DIVISION'),
            content: t('history.event6.content', '303rd Division'),
            icon: <HistoryIcon size={20} />
        },
        {
            year: "Styczeń 2026 - Obecnie",
            title: t('history.event7.title', 'NIGHTFALL_SQUADRON'),
            content: t('history.event7.content', 'Nightfall Squadron'),
            icon: <Cpu size={20} />
        }
    ];

    return (
        <div className="history-page">
            <Navbar />

            <div className="history-overlay"></div>
            <div className="history-scanlines"></div>

            {/* Hero Section */}
            <section className="history-hero">
                <div className="hero-decoration">
                    <HistoryIcon size={16} className="hero-icon" />
                    <span className="hero-tag">TIMELINE_ARCHIVE</span>
                </div>
                <h1 className="history-title glitch-text" data-text={t('history.title', 'FACTION HISTORY')}>
                    <DecodedText text={t('history.title', 'FACTION HISTORY')} delay={0.2} />
                </h1>
                <p className="history-subtitle">
                    {t('history.subtitle', 'Official chronological records of Nightfall Squadron operations.')}
                </p>
                <div className="hero-divider">
                    <span></span><Cpu size={20} /><span></span>
                </div>
            </section>

            {/* Timeline Section */}
            <motion.main
                className="history-container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {/* Vertical timeline line */}
                <div className="timeline-line"></div>

                {timelineEvents.map((event, index) => (

                    <motion.div
                        key={index}
                        className="timeline-item"
                        variants={itemVariants}
                    >
                        <div className="timeline-badge">
                            <div className="badge-outer">
                                {event.icon}
                            </div>
                        </div>

                        <div className="timeline-card">
                            <div className="card-header">
                                <span className="card-year">{event.year}</span>
                                <h3 className="card-title">{event.title}</h3>
                            </div>
                            <div className="card-body">
                                <p>{event.content}</p>
                            </div>

                            {/* HUD Elements */}
                            <div className="card-scanner"></div>
                            <div className="corner tl"></div><div className="corner tr"></div>
                            <div className="corner bl"></div><div className="corner br"></div>
                        </div>
                    </motion.div>
                ))}
            </motion.main>

            <footer className="history-footer">
                <div className="footer-line"></div>
                <div className="footer-tag">RECORDS_LOCKED_v3.5 :: COMMAND_LEVEL_CLEARANCE</div>
            </footer>
        </div>
    );
};

export default History;
