import React from 'react';
import { motion } from 'framer-motion';

const StaffMemberCard = ({ member, onMoreInfo }) => {
  return (
    <motion.div
      className="staff-member-card"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -12, scale: 1.02 }}
    >
      <div className="staff-card-inner">
        <motion.img
          src={member.avatar || 'https://via.placeholder.com/120?text=No+Avatar'}
          alt={member.name}
          className="staff-member-avatar"
          whileHover={{ scale: 1.1, rotate: 2 }}
          transition={{ duration: 0.3 }}
        />
        <h3 className="staff-member-name">{member.name}</h3>
        <p className="staff-member-role">{member.role}</p>
        <motion.button
          className="staff-member-button"
          onClick={() => onMoreInfo && onMoreInfo(member)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          More Info
        </motion.button>
      </div>
    </motion.div>
  );
};

export default StaffMemberCard;
