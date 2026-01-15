/* src/Components/Staff/StaffMemberCard.jsx */

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const StaffMemberCard = ({ member, onMoreInfo }) => {
  const { t } = useTranslation();

  const getRoleClass = (role) => {
    const r = role.toLowerCase();
    if (r.includes('command')) return 'role-command';
    if (r.includes('co leader')) return 'role-coleader';
    if (r.includes('administrator')) return 'role-admin';
    if (r.includes('moderator')) return 'role-mod';
    if (r.includes('elder')) return 'role-elder';
    return '';
  };

  return (
    <motion.div
      className="staff-member-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="staff-card-inner">


        <div className="staff-member-avatar-container">
          <img
            src={member.avatar || 'https://via.placeholder.com/150'}
            alt={member.name}
            className="staff-member-avatar"
          />
        </div>
        <h3 className="staff-member-name">{member.name}</h3>
        <p className={`staff-member-role ${getRoleClass(member.role)}`}>
          <span>[</span> {member.role} <span>]</span>
        </p>
        <motion.button
          className="staff-member-button"
          onClick={() => onMoreInfo && onMoreInfo(member)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('staff.viewDossier', 'View Dossier')}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default StaffMemberCard;
