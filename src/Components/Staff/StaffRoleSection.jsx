import React from 'react';
import { useTranslation } from 'react-i18next';
import StaffMemberCard from './StaffMemberCard';

const StaffRoleSection = ({ roleTitle, members, onMemberMoreInfo }) => {
  const { t } = useTranslation();

  return (
    <section className="staff-role-section">
      <h2 className="staff-role-title">{roleTitle}</h2>
      {members && members.length > 0 ? (
        <div className="staff-members-grid">
          {members.map((member, index) => (
            <StaffMemberCard
              key={`${member.id || index}`}
              member={member}
              onMoreInfo={onMemberMoreInfo}
            />
          ))}
        </div>
      ) : (
        <p className="staff-no-members">{t('staff.noMembers', 'Brak członków w tej roli')}</p>
      )}
    </section>
  );
};

export default StaffRoleSection;
