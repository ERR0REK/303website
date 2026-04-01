import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './WarLogs.css';

const WarLogModal = ({ log, onClose }) => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('info'); // 'info', 'enemyKD', 'memberKD'

    const resultClass =
        log.result === 'WIN' || log.result === 'EASY_WIN' ? 'text-win' :
            log.result === 'LOSS' ? 'text-loss' : 'text-draw';

    const resultLabel = t(`warLogs.results.${log.result}`, { defaultValue: log.result });

    return (
        <div className="warlog-modal-overlay" onClick={onClose}>
            <motion.div
                className="warlog-modal"
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
            >
                <div className="modal-header">
                    <div className="header-title">
                        <span className="accent-bar"></span>
                        <h2>{t('warLogs.modalTitle', 'MISSION REPORT')}</h2>
                    </div>
                    <span className="close-btn" onClick={onClose}>&times;</span>
                </div>

                {/* Tab Switcher */}
                <div className="modal-tabs">
                    <button
                        className={`tab-btn ${activeTab === 'info' ? 'active' : ''}`}
                        onClick={() => setActiveTab('info')}
                    >
                        {t('warLogs.tabs.info', 'INFO')}
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'enemyKD' ? 'active' : ''}`}
                        onClick={() => setActiveTab('enemyKD')}
                    >
                        {t('warLogs.tabs.enemyKD', 'KD WROGÓW')}
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'memberKD' ? 'active' : ''}`}
                        onClick={() => setActiveTab('memberKD')}
                    >
                        {t('warLogs.tabs.memberKD', 'KD CZŁONKÓW')}
                    </button>
                </div>

                <div className="modal-body">
                    <AnimatePresence mode="wait">
                        {activeTab === 'info' && (
                            <motion.div
                                key="info"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                className="tab-pane info-pane"
                            >
                                <div className="modal-sidebar">
                                    <div className="modal-image-container">
                                        <img src={log.victoryImg || log.img} alt="Victory" className="modal-img" />
                                        <div className={`modal-result-badge ${resultClass.replace('text-', 'result-')}`}>{resultLabel}</div>
                                    </div>

                                    <div className="modal-stats-panel">
                                        <div className="stat-row">
                                            <span className="stat-label">{t('warLogs.labels.duration', 'CZAS WOJNY')}:</span>
                                            <span className="stat-value">{log.duration}</span>
                                        </div>
                                        <div className="stat-row">
                                            <span className="stat-label">{t('warLogs.labels.result', 'WYNIK')}:</span>
                                            <span className={`stat-value ${resultClass}`}>{resultLabel}</span>
                                        </div>
                                        <div className="stat-row mvp-row">
                                            <span className="stat-label">{t('warLogs.labels.mvp', "MVP('S)")}</span>
                                            <span className="stat-value mvp-name">{log.mvp}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="modal-content-main">
                                    <h3 className="modal-war-title">
                                        {log.opponent}
                                    </h3>
                                    <p className="log-date">{log.date}</p>

                                    <div className="log-section">
                                        <h4 className="section-title">{t('warLogs.labels.reason', 'POWÓD WOJNY')}</h4>
                                        <p className="log-text highlight-reason">
                                            "{log.reason}"
                                        </p>
                                    </div>

                                    <div className="log-section">
                                        <h4 className="section-title">{t('warLogs.labels.members', 'CZŁONKOWIE')}</h4>
                                        <div className="members-grid">
                                            {log.members.split(',').map((member, index) => (
                                                <span key={index} className="member-tag">
                                                    {member.trim()}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {log.note && (
                                        <div className="log-section">
                                            <h4 className="section-title">{t('warLogs.labels.note', 'NOTATKA')}</h4>
                                            <p className="log-text highlight-note">
                                                {log.note}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'enemyKD' && (
                            <motion.div
                                key="enemyKD"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                className="tab-pane kd-pane"
                            >
                                <h4 className="pane-title">{t('warLogs.kd.titleEnemy', 'STATYSTYKI PRZECIWNIKÓW')}</h4>
                                <div className="kd-table">
                                    <div className="kd-header">
                                        <span>{t('warLogs.kd.player', 'GRACZ')}</span>
                                        <span>{t('warLogs.kd.kills', 'KILLS')}</span>
                                        <span>{t('warLogs.kd.deaths', 'DEATHS')}</span>
                                        <span>{t('warLogs.kd.ratio', 'K/D')}</span>
                                    </div>
                                    {[...(log.enemyKD || [])]
                                        .sort((a, b) => (b.kills / Math.max(1, b.deaths)) - (a.kills / Math.max(1, a.deaths)))
                                        .map((player, idx) => {
                                            const ratio = player.kills / Math.max(1, player.deaths);
                                            const ratioClass = ratio > 1 ? 'ratio-positive' : ratio < 1 ? 'ratio-negative' : 'ratio-neutral';
                                            const medal = idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : null;
                                            const rankClass = idx === 0 ? 'rank-1' : idx === 1 ? 'rank-2' : idx === 2 ? 'rank-3' : '';
                                            return (
                                                <div className={`kd-row ${rankClass}`} key={idx}>
                                                    <span className="player-name">{medal && <span className="rank-badge">{medal}</span>}{player.name}</span>
                                                    <span className="kills">{player.kills}</span>
                                                    <span className="deaths">{player.deaths}</span>
                                                    <span className={`ratio ${ratioClass}`}>{ratio.toFixed(2)}</span>
                                                </div>
                                            );
                                        })}
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'memberKD' && (
                            <motion.div
                                key="memberKD"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                className="tab-pane kd-pane"
                            >
                                <h4 className="pane-title">{t('warLogs.kd.titleMember', 'STATYSTYKI FRAKCJI')}</h4>
                                <div className="kd-table">
                                    <div className="kd-header">
                                        <span>{t('warLogs.kd.member', 'CZŁONEK')}</span>
                                        <span>{t('warLogs.kd.kills', 'KILLS')}</span>
                                        <span>{t('warLogs.kd.deaths', 'DEATHS')}</span>
                                        <span>{t('warLogs.kd.ratio', 'K/D')}</span>
                                    </div>
                                    {[...(log.memberKD || [])]
                                        .sort((a, b) => (b.kills / Math.max(1, b.deaths)) - (a.kills / Math.max(1, a.deaths)))
                                        .map((player, idx) => {
                                            const ratio = player.kills / Math.max(1, player.deaths);
                                            const ratioClass = ratio > 1 ? 'ratio-positive' : ratio < 1 ? 'ratio-negative' : 'ratio-neutral';
                                            const medal = idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : null;
                                            const rankClass = idx === 0 ? 'rank-1' : idx === 1 ? 'rank-2' : idx === 2 ? 'rank-3' : '';
                                            return (
                                                <div className={`kd-row ${rankClass}`} key={idx}>
                                                    <span className="player-name">{medal && <span className="rank-badge">{medal}</span>}{player.name}</span>
                                                    <span className="kills">{player.kills}</span>
                                                    <span className="deaths">{player.deaths}</span>
                                                    <span className={`ratio ${ratioClass}`}>{ratio.toFixed(2)}</span>
                                                </div>
                                            );
                                        })}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
};

export default WarLogModal;
