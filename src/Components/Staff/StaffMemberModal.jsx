import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

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
    if (e.target.className === 'staff-modal-overlay' || e.target.className === `staff-modal-overlay ${isClosing ? 'closing' : ''}`) {
      handleClose();
    }
  };

  return (
    <div className={`staff-modal-overlay ${isClosing ? 'closing' : ''}`} onClick={handleBackdropClick}>
      <div className={`staff-modal-content ${isClosing ? 'closing' : ''}`}>
        <button className="staff-modal-close" onClick={handleClose}>
          ✕
        </button>

        <div className="staff-modal-header">
          <img
            src={member.avatar || 'https://via.placeholder.com/150'}
            alt={member.name}
            className="staff-modal-avatar"
          />
          <div className="staff-modal-info">
            <h2 className="staff-modal-name">{member.name}</h2>
            <p className="staff-modal-role">{member.role}</p>
          </div>
        </div>

        <div className="staff-modal-body">
          <p className="staff-modal-description">
            {t(`staff.descriptions.${member.name.toLowerCase()}`, 'Brak opisu')}
          </p>

          <div className="staff-modal-details">
            <div className="staff-modal-detail-item">
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
            </div>
            <div className="staff-modal-detail-item">
              <span className="staff-modal-label">{t('staffModal.inGameRank', 'In-Game Rank')}:</span>
              <span className="staff-modal-value">{member.inGameRank || 'N/A'}</span>
            </div>
            <div className="staff-modal-detail-item">
              <span className="staff-modal-label">{t('staffModal.role', 'Rola')}:</span>
              <span className="staff-modal-value">{member.role}</span>
            </div>
            {member.joinDate && (
              <div className="staff-modal-detail-item">
                <span className="staff-modal-label">{t('staffModal.joinDate', 'Dołączył')}:</span>
                <span className="staff-modal-value">{member.joinDate}</span>
              </div>
            )}
            {member.achievements && (
              <div className="staff-modal-detail-item">
                <span className="staff-modal-label">{t('staffModal.achievements', 'Osiągnięcia')}:</span>
                <span className="staff-modal-value">{member.achievements}</span>
              </div>
            )}
          </div>
        </div>

        <div className="staff-modal-footer">
          <button className="staff-modal-button-close" onClick={handleClose}>
            {t('staffModal.close', 'Zamknij')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaffMemberModal;
