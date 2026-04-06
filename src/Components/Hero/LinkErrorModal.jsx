import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, WifiOff, AlertOctagon, Terminal } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LinkErrorModal = ({ isOpen, onClose, platform }) => {
    const { t } = useTranslation();

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="link-error-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="link-error-content"
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="error-corner tl"></div><div className="error-corner tr"></div>
                        <div className="error-corner bl"></div><div className="error-corner br"></div>
                        <div className="error-scanner-line"></div>

                        <button className="error-close-btn" onClick={onClose}>
                            <X size={20} />
                        </button>

                        <div className="error-header">
                            <div className="icon-wrapper">
                                <WifiOff className="error-icon" size={40} />
                                <AlertOctagon className="error-icon-bg" size={80} />
                            </div>
                            <div className="error-title-group">
                                <div className="error-tag">TERMINAL_ERROR_0x404</div>
                                <h2 className="error-title">CONNECTION_FAILED</h2>
                            </div>
                        </div>

                        <div className="error-body">
                            <div className="error-message-box">
                                <div className="box-header">
                                    <Terminal size={14} />
                                    <span>SYSTEM_LOG</span>
                                </div>
                                <p>
                                    {t('hero.linkError', {
                                        platform: platform.toUpperCase(),
                                        defaultValue: `Critical error: Uplink to ${platform.toUpperCase()} has not been established in the tactical database yet.`
                                    })}
                                </p>
                            </div>

                            <div className="error-status-line">
                                <span className="label">STATUS:</span>
                                <span className="value">PENDING_INITIALIZATION</span>
                            </div>
                        </div>

                        <div className="error-footer">
                            <button className="error-confirm-btn" onClick={onClose}>
                                {t('common.acknowledge', 'ACKNOWLEDGE')}
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LinkErrorModal;
