import React, { useState } from 'react';

const StaffMemberCard = ({ member, onMoreInfo }) => {
  const [setIsHovered] = useState(false);

  return (
    <div
      className="staff-member-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={member.avatar || 'https://via.placeholder.com/120?text=No+Avatar'}
        alt={member.name}
        className="staff-member-avatar"
      />
      <h3 className="staff-member-name">{member.name}</h3>
      <p className="staff-member-role">{member.role}</p>
      <button
        className="staff-member-button"
        onClick={() => onMoreInfo && onMoreInfo(member)}
      >
        More Info
      </button>
    </div>
  );
};

export default StaffMemberCard;
