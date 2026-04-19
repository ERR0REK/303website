import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, Terminal } from 'lucide-react';
import './Security.css';
const AUTHORIZED_ADMIN_IDS = ["687701665771814939"];

const SecurityLayer = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [violationType, setViolationType] = useState('');

    useEffect(() => {
        let isAdmin = false;
        try {
            const session = JSON.parse(localStorage.getItem('NS_auth_session'));
            if (session && session.user_id && AUTHORIZED_ADMIN_IDS.includes(session.user_id)) {
                isAdmin = true;
            }
        } catch (e) {
            console.error(e);
        }

        const handleContextMenu = (e) => {
            if (isAdmin) return;
            e.preventDefault();
            triggerAlert('UNAUTHORIZED_ACCESS_CONTEXT_MENU');
        };

        const handleKeyDown = (e) => {
            if (isAdmin) return;
            if (e.keyCode === 123) {
                e.preventDefault();
                triggerAlert('UNAUTHORIZED_HARDWARE_F12');
            }
            if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
                e.preventDefault();
                triggerAlert('INSPECTION_BYPASS_DETECTED');
            }
            if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
                e.preventDefault();
                triggerAlert('CONSOLE_MANIPULATION_ATTEMPT');
            }
            if (e.ctrlKey && e.keyCode === 85) {
                e.preventDefault();
                triggerAlert('SOURCE_EXTRACTION_FAIL');
            }
        };

        const triggerAlert = (type) => {
            setViolationType(type);
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 3000);
        };

        window.addEventListener('contextmenu', handleContextMenu);
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('contextmenu', handleContextMenu);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <AnimatePresence>
            {showAlert && (
                <motion.div
                    className="security-breach-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="security-alert-box"
                        initial={{ scale: 0.8, opacity: 0, y: -50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: -50 }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 400 }}
                    >
                        <div className="s-tl"></div><div className="s-tr"></div>
                        <div className="s-bl"></div><div className="s-br"></div>

                        <div className="alert-header">
                            <ShieldAlert className="alert-icon" size={30} />
                            <div className="alert-title-main">SECURITY_VIOLATION</div>
                        </div>

                        <div className="alert-content">
                            <div className="violation-label">
                                <Terminal size={12} />
                                <span>{violationType}</span>
                            </div>
                            <p className="alert-desc">
                                Unauthorized access to unit source-code restricted by Nightfall Squadron protocols.
                                IP_LOGGING: ACTIVE.
                            </p>
                        </div>

                        <div className="alert-footer">
                            <div className="scanning-bar"></div>
                            <span className="status-text">COUNTER_INTEL_SYSTEM_ENGAGED</span>
                        </div>
                    </motion.div>

                    <div className="security-glitch-bg"></div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SecurityLayer;
