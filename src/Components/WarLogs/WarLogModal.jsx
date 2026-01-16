import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './WarLogs.css';

const WarLogModal = ({ log, onClose }) => {
    const { t } = useTranslation();

    const resultClass =
        log.result === 'WIN' || log.result === 'EASY_WIN' ? 'text-win' :
            log.result === 'LOSS' ? 'text-loss' : 'text-draw';

    const resultLabel = t(`warLogs.results.${log.result}`);

    return (
        <div className="warlog-modal-overlay" onClick={onClose}>
            <motion.div
                className="warlog-modal"
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
            >
                <div className="modal-header">
                    <h2>{t('warLogs.modalTitle', 'MISSION REPORT')}</h2>
                    <span className="close-btn" onClick={onClose}>&times;</span>
                </div>

                <div className="modal-body">
                    {/* --- SIDEBAR: Image & Key Stats --- */}
                    <div className="modal-sidebar">
                        <div className="modal-image-container">
                            <img src={log.img} alt="War Context" className="modal-img" />
                            <div className={`modal-result-badge ${resultClass}`}>{resultLabel}</div>
                        </div>

                        <div className="modal-stats-panel">
                            <div className="stat-row">
                                <span className="stat-label">{t('warLogs.labels.duration')}:</span>
                                <span className="stat-value">{log.duration}</span>
                            </div>
                            <div className="stat-row">
                                <span className="stat-label">{t('warLogs.labels.result')}:</span>
                                <span className={`stat-value ${resultClass}`}>{resultLabel}</span>
                            </div>
                            <div className="stat-row">
                                <span className="stat-label">MAP:</span>
                                <span className="stat-value">{log.map}</span>
                            </div>
                            <div className="stat-row mvp-row">
                                <span className="stat-label">{t('warLogs.labels.mvp')}:</span>
                                <span className="stat-value mvp-name">{log.mvp}</span>
                            </div>
                        </div>
                    </div>

                    {/* --- MAIN CONTENT: Details, Reason, Members --- */}
                    <div className="modal-content-main">
                        <h3 className="modal-war-title">
                            {t('warLogs.labels.warWith', { opponent: log.opponent })}
                        </h3>
                        <p className="log-date">{log.date}</p>

                        <div className="log-section">
                            <h4 className="section-title">{t('warLogs.labels.reason')}</h4>
                            <p className="log-text highlight-reason">
                                "{log.reason}"
                            </p>
                        </div>

                        <div className="log-section">
                            <h4 className="section-title">{t('warLogs.labels.members')}</h4>
                            <div className="members-grid">
                                {log.members.split(',').map((member, index) => (
                                    <span key={index} className="member-tag">
                                        {member.trim()}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Optional: Briefing/Description if needed later */}
                        {log.detailsKey && (
                            <div className="log-section">
                                <h4 className="section-title">{t('warLogs.briefing')}</h4>
                                <p className="log-text">{t(log.detailsKey)}</p>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default WarLogModal;
