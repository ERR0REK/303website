import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function RegWarningPanel() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="reg-warning-panel"
    >
      <AlertTriangle className="reg-warning-icon" size={32} />
      <div className="reg-warning-content">
        <p>{t('regulations.highlight')}</p>
      </div>
    </motion.div>
  );
}