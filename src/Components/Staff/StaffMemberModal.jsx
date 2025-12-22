/* src/Components/Staff/StaffMemberModal.jsx */

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const StaffMemberModal = ({ member, onClose }) => {
  const { t } = useTranslation();
  const [isClosing, setIsClosing] = useState(false);

  if (!member) return null;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  const handleBackdropClick = (e) => {
    if (e.target.className.includes('staff-modal-overlay')) {
      handleClose();
    }
  };

  return (
    <AnimatePresence>
      {member && (
        <motion.div 
          className={`staff-modal-overlay ${isClosing ? 'closing' : ''}`} 
          onClick={handleBackdropClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className={`staff-modal-content ${isClosing ? 'closing' : ''}`}
            initial={{ opacity: 0, scale: 0.8, y: -30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.button 
              className="staff-modal-close" 
              onClick={handleClose}
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              ✕
            </motion.button>

            <motion.div 
              className="staff-modal-header"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <motion.img
                src={member.avatar || 'https://via.placeholder.com/150'}
                alt={member.name}
                className="staff-modal-avatar"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="staff-modal-info">
                <motion.h2 
                  className="staff-modal-name"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                >
                  {member.name}
                </motion.h2>
                <motion.p 
                  className="staff-modal-role"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  {member.role}
                </motion.p>
              </div>
            </motion.div>

            <motion.div 
              className="staff-modal-body"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="staff-modal-description">
                {t(`staff.descriptions.${member.name.toLowerCase()}`, 'Brak opisu')}
              </p>

              <motion.div 
                className="staff-modal-details"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <motion.div 
                  className="staff-modal-detail-item"
                  whileHover={{ x: 5, backgroundColor: 'rgba(0, 255, 76, 0.15)' }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="staff-modal-label">{t('staffModal.robloxUsername', 'Roblox Username')}:</span>
                  <span className="staff-modal-value">
                    {member.robloxUsername && member.robloxUserId ? (
                      <a 
                        href={`https://www.roblox.com/users/${member.robloxUserId}/profile`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="staff-modal-link"
                      >
                        {member.robloxUsername}
                      </a>
                    ) : (
                      member.robloxUsername || 'N/A'
                    )}
                  </span>
                </motion.div>
                <motion.div 
                  className="staff-modal-detail-item"
                  whileHover={{ x: 5, backgroundColor: 'rgba(0, 255, 76, 0.15)' }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="staff-modal-label">{t('staffModal.inGameRank', 'In-Game Rank')}:</span>
                  <span className="staff-modal-value">{member.inGameRank || 'N/A'}</span>
                </motion.div>
                <motion.div 
                  className="staff-modal-detail-item"
                  whileHover={{ x: 5, backgroundColor: 'rgba(0, 255, 76, 0.15)' }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="staff-modal-label">{t('staffModal.role', 'Rola')}:</span>
                  <span className="staff-modal-value">{member.role}</span>
                </motion.div>
                {member.joinDate && (
                  <motion.div 
                    className="staff-modal-detail-item"
                    whileHover={{ x: 5, backgroundColor: 'rgba(0, 255, 76, 0.15)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="staff-modal-label">{t('staffModal.joinDate', 'Dołączył')}:</span>
                    <span className="staff-modal-value">{member.joinDate}</span>
                  </motion.div>
                )}
                {member.achievements && (
                  <motion.div 
                    className="staff-modal-detail-item"
                    whileHover={{ x: 5, backgroundColor: 'rgba(0, 255, 76, 0.15)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="staff-modal-label">{t('staffModal.achievements', 'Osiągnięcia')}:</span>
                    <span className="staff-modal-value">{member.achievements}</span>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>

            <motion.div 
              className="staff-modal-footer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
            >
              <motion.button 
                className="staff-modal-button-close" 
                onClick={handleClose}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {t('staffModal.close', 'Zamknij')}
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StaffMemberModal;
