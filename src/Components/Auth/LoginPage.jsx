import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Lock,
    ShieldAlert,
    Info,
    Cpu,
    CheckCircle2,
    Eye
} from 'lucide-react';
import logo from '../../Assets/logo.png';
import './LoginPage.css';

const LoginPage = () => {
    const { t } = useTranslation();
    const [showPrivacy, setShowPrivacy] = useState(false);
    const [showTOS, setShowTOS] = useState(false);
    
    const [acceptedPolicies, setAcceptedPolicies] = useState({ tos: false, privacy: false });
    const isFullyAccepted = acceptedPolicies.tos && acceptedPolicies.privacy;
    
    const [tosError, setTosError] = useState(false);
    const DISCORD_CLIENT_ID = "1448793452044222586";
    const REDIRECT_URI = encodeURIComponent(window.location.origin + "/#/auth/callback");

    const DISCORD_AUTH_URL = `https://discord.com/api/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=identify%20guilds`;

    const handleLogin = () => {
        if (!isFullyAccepted) {
            setTosError(true);
            setTimeout(() => setTosError(false), 2000);
            return;
        }

        const currentPath = window.location.hash.replace('#', '') || '/';
        if (!currentPath.includes('/auth/callback')) {
            localStorage.setItem('NS_redirect_after_login', currentPath);
        }
        window.location.href = DISCORD_AUTH_URL;
    };

    return (
        <div className="login-page">
            <div className="login-overlay"></div>
            <div className="login-scanlines"></div>

            <motion.div
                className="login-container"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="login-card">
                    <div className="corner tl"></div><div className="corner tr"></div>
                    <div className="corner bl"></div><div className="corner br"></div>
                    <div className="card-scanner"></div>

                    <div className="login-header">
                        <img src={logo} alt="Logo" className="login-logo" />
                        <h1 className="login-title">NIGHTFALL SQUADRON</h1>
                        <div className="security-status">
                            <Lock size={14} />
                            <span>SECURE_GATEWAY_v4.2</span>
                        </div>
                    </div>

                    <div className="login-body">
                        <h2 className="login-prompt">
                            {t('login.prompt', 'ZALOGUJ SIĘ, ABY KONTYNUOWAĆ')}
                        </h2>
                        <p className="login-subtitle">
                            {t('login.subtitle', 'Autoryzuj swoje konto, aby uzyskać dostęp do panelu taktycznego.')}
                        </p>

                        <div className={`tos-checkbox-container ${tosError ? 'error-shake' : ''}`}>
                            <label className="checkbox-label" style={{ cursor: isFullyAccepted ? 'default' : 'not-allowed' }}>
                                <input 
                                    type="checkbox" 
                                    checked={isFullyAccepted} 
                                    readOnly
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (!isFullyAccepted) setTosError(true);
                                    }} 
                                />
                                <span className="checkmark" style={{ opacity: isFullyAccepted ? 1 : 0.5 }}></span>
                                <span className="checkbox-text">
                                    Potwierdzam przeczytanie  
                                    <span className="checkbox-link" onClick={() => setShowTOS(true)}>Zasad {acceptedPolicies.tos && '✔️'}</span> oraz 
                                    <span className="checkbox-link" onClick={() => setShowPrivacy(true)}>Polityki {acceptedPolicies.privacy && '✔️'}</span>.
                                </span>
                            </label>
                        </div>

                        <button className={`discord-login-btn ${!isFullyAccepted ? 'disabled' : ''}`} onClick={handleLogin}>
                            <div className="btn-glow"></div>
                            <svg viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
                                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a67.73,67.73,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.2,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
                            </svg>
                            <span>{t('login.with_discord', 'ZALOGUJ PRZEZ DISCORD')}</span>
                        </button>

                        <div className="membership-requirements">
                            <div className="req-header">
                                <Info size={16} />
                                <span>{t('login.requirements_title', 'WYMAGANIA DOSTĘPU')}</span>
                            </div>
                            <ul className="req-list">
                                <li>
                                    <CheckCircle2 size={14} className="req-icon" />
                                    <span>{t('login.req1', 'Ważne konto Discord')}</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={14} className="req-icon" />
                                    <span>{t('login.req2', 'Przynależność do oficjalnego serwera NS')}</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={14} className="req-icon" />
                                    <span>{t('login.req3', 'Zweryfikowany status operacyjny')}</span>
                                </li>
                            </ul>

                            <div className="req-notice">
                                <ShieldAlert size={14} />
                                <p>{t('login.notice', 'Logowanie przez Discord jest wymagane do weryfikacji statusu członka oraz zabezpieczenia sesji.')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="login-footer">
                        <div className="footer-links">
                            <span className="footer-link-static" onClick={() => setShowTOS(true)}>{t('login.tos', 'Warunki Korzystania')}</span>
                            <span className="dot"></span>
                            <span className="footer-link-static" onClick={() => setShowPrivacy(true)}>{t('login.privacy', 'Polityka Prywatności')}</span>
                        </div>
                        <div className="system-load">
                            <Cpu size={12} />
                            <span>SYSTEM_READY: AUTH_REQUIRED</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            <AnimatePresence>
                {showPrivacy && (
                    <motion.div className="privacy-modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <motion.div className="privacy-modal" initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0 }}>
                            <h3><Eye size={20} /> Transparentność Danych (Polityka Prywatności)</h3>
                            <p>Szanujemy Twoją prywatność. System <b>Nightfall Squadron</b> przetwarza wyłącznie niezbędne minimum informacji od platformy Discord, aby zweryfikować Twoją przynależność do dywizji.</p>
                            <p><strong>Czego dokładnie wymaga system przy autoryzacji:</strong></p>
                            <div className="discord-proof-box">
                                <div className="proof-header">Uprawnienia żądane przez Discord dla NS Management:</div>
                                <div className="proof-item">
                                    <CheckCircle2 size={16} color="#00ff66" />
                                    <span>Poznaj listę Twoich serwerów</span>
                                </div>
                                <div className="proof-item">
                                    <CheckCircle2 size={16} color="#00ff66" />
                                    <span>Uzyskać dostęp do Twojej nazwy użytkownika, awataru i baneru</span>
                                </div>
                            </div>
                            <p>👉 <b>Ważne:</b> Nie mamy wglądu w Twoje hasła, wiadomości, adres email, znajomych, ani inne wrażliwe dane prywatne. Aplikacja prosi tylko o powyższe 2 parametry.</p>
                            <button className="privacy-modal-close" onClick={() => {
                                setAcceptedPolicies(prev => ({ ...prev, privacy: true }));
                                setTosError(false);
                                setShowPrivacy(false);
                            }}>ZROZUMIAŁEM</button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            
            <AnimatePresence>
                {showTOS && (
                    <motion.div className="privacy-modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <motion.div className="privacy-modal" initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0 }}>
                            <h3><ShieldAlert size={20} /> Warunki Korzystania z Systemu</h3>
                            <p>Logując się do wewnętrznego panelu Nightfall Squadron akceptujesz Regulamin Operacyjny oraz poniższe warunki dostępu:</p>
                            <ul>
                                <li>Wiedza pozyskana w panelach wewnętrznych (w tym np. lista KOS) stanowi poufną informację frakcji.</li>
                                <li>Wynoszenie informacji wywiadowczych poza strukturę NS skutkuje natychmiastowym rozwiązaniem członkostwa.</li>
                                <li>Użytkownik zobowiązuje się do utrzymywania poziomu kultury zgodnego z 1 Dywizją podczas jakichkolwiek sesji powiązanych z bazą danych NS.</li>
                                <li>Ewentualne próby celowego omijania zabezpieczeń Anti-Cheat (Nightfall Security Layer) automatycznie zapisują logi w systemie i odcinają dostęp do bazy.</li>
                            </ul>
                            <p>Autoryzacja potwierdza Twój status jako dedykowanego operatywnika frakcji.</p>
                            <button className="privacy-modal-close" onClick={() => {
                                setAcceptedPolicies(prev => ({ ...prev, tos: true }));
                                setTosError(false);
                                setShowTOS(false);
                            }}>AKCEPTUJĘ</button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LoginPage;
