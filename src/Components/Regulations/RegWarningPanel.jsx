// src/Components/Regulations/RegWarningPanel.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, ShieldAlert } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function RegWarningPanel() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="reg-warning-panel"
    >
      <div className="warning-hud-line"></div>
      <div className="warning-icon-wrapper">
        <AlertTriangle className="reg-warning-icon" size={32} />
        <ShieldAlert className="reg-warning-icon-bg" size={60} />
      </div>
      <div className="reg-warning-content">
        <div className="warning-label">PRIORITY_ALERT</div>
        <p>{t('regulations.highlight')}</p>
      </div>
      <div className="warning-corner tl"></div><div className="warning-corner br"></div>
    </motion.div>
  );
}