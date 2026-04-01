/* src/Components/Pages/KOSModal.jsx */

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ShieldAlert, User, Users, Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './KOSModal.css';

const KOSModal = ({ isOpen, onClose, target }) => {
    const { t } = useTranslation();

    if (!target) return null;

    const isFaction = target.type === 'faction';

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="kos-modal-overlay" onClick={onClose}>
                    <motion.div 
                        className={`kos-modal-content ${target.threat?.toLowerCase()}`}
                        onClick={e => e.stopPropagation()}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                    >
                        {/* Header */}
                        <div className="modal-header">
                            <div className="header-left">
                                <ShieldAlert className="header-icon" />
                                <div className="header-text">
                                    <span className="security-tag">THREAT_INTEL_REPORT</span>
                                    <h2>{target.name}</h2>
                                </div>
                            </div>
                            <button className="close-btn" onClick={onClose}>
                                <X size={20} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="modal-body">
                            <div className="intel-grid">
                                {isFaction ? (
                                    <div className="intel-item">
                                        <div className="item-label">
                                            <Users size={14} />
                                            <span>{t('kos.leaderLabel', 'LEADER')}</span>
                                        </div>
                                        <div className="item-value highlight">{target.leader || 'UNKNOWN_CONTACT'}</div>
                                    </div>
                                ) : (
                                    <div className="intel-item">
                                        <div className="item-label">
                                            <User size={14} />
                                            <span>{t('kos.robloxNicknameLabel', 'ROBLOX NICKNAME')}</span>
                                        </div>
                                        <a 
                                            href={target.robloxLink || "#"} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="item-value link-value"
                                        >
                                            {target.robloxNickname || target.name}
                                            <ExternalLink size={12} />
                                        </a>
                                    </div>
                                )}

                                <div className="intel-item full-width">
                                    <div className="item-label">
                                        <Info size={14} />
                                        <span>{t('kos.noteLabel', 'NOTE')}</span>
                                    </div>
                                    <div className="item-value note-box">
                                        {target.note || target.reason || 'NO_ADDITIONAL_INTEL_PROVIDED'}
                                    </div>
                                </div>
                            </div>

                            {/* Status Footer */}
                            <div className="threat-status-bar">
                                <div className="status-segment">
                                    <span className="lbl">STATUS:</span>
                                    <span className="val active">{target.status}</span>
                                </div>
                            </div>
                        </div>

                        {/* HUD Decorations */}
                        <div className="modal-scanner"></div>
                        <div className="corner-deco tl"></div>
                        <div className="corner-deco tr"></div>
                        <div className="corner-deco bl"></div>
                        <div className="corner-deco br"></div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default KOSModal;
