/* src/Components/Staff/StaffMemberCard.jsx */

import React from "react";
import { motion } from "framer-motion";

export default function StaffMemberCard({ member, onMoreInfo }) {
  if (!member) return null;

  return (
    <motion.div
      className="staff-card"
      onClick={() => onMoreInfo(member)}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
    >
      <div className="card-top">
        <div className="avatar-container">
          <div className="avatar-frame"></div>
          <img
            src={member.avatar || "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"}
            alt={member.name}
            className="staff-pfp"
          />
        </div>
        <div className="info-container">
          <h3 className="member-name">{member.name}</h3>
          <p className="member-role">{member.role}</p>
        </div>
      </div>

      <div className="card-meta">
        <div className="meta-item">
          <span className="meta-label">ID_SCAN:</span>
          <span className="meta-val">#{member.id.toString().padStart(4, '0')}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">STATUS:</span>
          <span className="meta-val" style={{ color: '#00ff66' }}>ACTIVE</span>
        </div>
      </div>

      {/* HUD Decos */}
      <div className="scan-line"></div>
      <div className="c-tl"></div><div className="c-tr"></div>
      <div className="c-bl"></div><div className="c-br"></div>
    </motion.div>
  );
}
