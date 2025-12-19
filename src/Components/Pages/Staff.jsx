import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Navbar from '../Navbar/Navbar';
import StaffRoleSection from '../Staff/StaffRoleSection';
import StaffMemberModal from '../Staff/StaffMemberModal';

/* Importowanie obrazków członków kadry */

import elizaPFP from '../../Assets/StaffMembersPFP/ElizaPFP.png';
import TymussPFP from '../../Assets/StaffMembersPFP/TymussPFP.png';
import AlexPFP from '../../Assets/StaffMembersPFP/AlexPFP.png';
import SLX_EX0T1CPFP from '../../Assets/StaffMembersPFP/EX0T1CPFP.png';
import PlantinaxiPFP from '../../Assets/StaffMembersPFP/PlantinaxiPFP.png';
import G4L4XYPFP from '../../Assets/StaffMembersPFP/G4L4XYPFP.png';
import miko_o1PFP from '../../Assets/StaffMembersPFP/Miko_o01PFP.png';
import chillin_noodlesPFP from '../../Assets/StaffMembersPFP/chillin_noodlesPFP.png';
import SilentPFP from '../../Assets/StaffMembersPFP/SilentPFP.png';
import tippsDadPFP from '../../Assets/StaffMembersPFP/tippsDadPFP.png';
import Bob_BudowniczyPFP from '../../Assets/StaffMembersPFP/Bob_budowniczyPFP.png';
import kabanosPFP from '../../Assets/StaffMembersPFP/kabanosPFP.png';
import MaverickPFP from '../../Assets/StaffMembersPFP/MaverickPFP.png';
import R_SPFP from '../../Assets/StaffMembersPFP/R_SPFP.png';
import KiepskiPFP from '../../Assets/StaffMembersPFP/KiepskiPFP.png';

/* Koniec importowania obrazków */

import '../Staff/Staff.css';

export default function Staff() {
  const { t } = useTranslation();
  const [selectedMember, setSelectedMember] = useState(null);

  // Dane przykładowe członków kadry
  // Można je zastąpić danymi z API lub bazy danych
  const staffData = {
    factionCommand: [
      {
        id: 1,
        name: 'Eliza',
        role: 'Faction Command',
        avatar: elizaPFP,
        robloxUsername: 'XxIsaacBestPlayerxX',
        robloxUserId: '5640334840',
        inGameRank: 'Leader'
      },
        {
        id: 12,
        name: 'Alex',
        role: 'Faction Command',
        avatar: AlexPFP,
        robloxUsername: 'atfg333',
        robloxUserId: '5163504964',
        inGameRank: ''
      },
    ],
    factionCoLeader: [
      {
        id: 2,
        name: 'Tymuss',
        role: 'Faction Co Leader',
        avatar: TymussPFP,
        robloxUsername: 'SAMISALAMI7',
        robloxUserId: '782408287',
        inGameRank: ''
      },
        {
        id: 3,
        name: 'SLX_EX0T1C',
        role: 'Technical Specialist & Faction Co Leader',
        avatar: SLX_EX0T1CPFP,
        robloxUsername: 'ERR0R_Gl1tch',
        robloxUserId: '2537111023',
        inGameRank: ''
      },
    ],
    technicalSpecialist: [],
    trialCoLeader: [],
    elder: [],
    trialElder: [
        {
            id: 4,
            name: 'Plantinaxi',
            role: 'Trial Elder',
            avatar: PlantinaxiPFP,
            robloxUsername: 'Plantinaxi',
            robloxUserId: '1157506780',
            inGameRank: ''
        },
    ],
    intelligence: [],
    headAdministrator: [],
    seniorAdministrator: [],
    administrator: [
      {
        id: 5,
        name: 'G4L4XY',
        role: 'Administrator',
        avatar: G4L4XYPFP,
        robloxUsername: 'Chrismoldova111',
        robloxUserId: '5223007921',
        inGameRank: ''
      },
      {
        id: 6,
        name: 'miko_o01',
        role: 'Administrator',
        avatar: miko_o1PFP,
        robloxUsername: '',
        robloxUserId: '',
        inGameRank: ''
      },
      {
        id: 7,
        name: 'chillin_noodles',
        role: 'Administrator',
        avatar: chillin_noodlesPFP,
        robloxUsername: '',
        robloxUserId: '',
        inGameRank: ''
      },
    ],
    trialAdministrator: [
        {
            id: 8,
            name: 'Silent',
            role: 'Trial Administrator',
            avatar: SilentPFP,
            robloxUsername: 'Warcel09',
            robloxUserId: '3061429272',
            inGameRank: ''
        },
        {
            id: 9,
            name: 'tippsDad',
            role: 'Trial Administrator',
            avatar: tippsDadPFP,
            robloxUsername: '',
            robloxUserId: '',
            inGameRank: ''
        },
    ],
    seniorModerator: [
        {
            id: 10,
            name: 'Bob_Budowniczy',
            role: 'Senior Moderator',
            avatar: Bob_BudowniczyPFP,
            robloxUsername: 'Bob_Budowniczy',
            robloxUserId: '7383324814',
            inGameRank: ''
        }
    ],
    moderator: [
        {
            id: 15,
            name: 'kabanos',
            role: 'Moderator',
            avatar: kabanosPFP,
            robloxUsername: '',
            robloxUserId: '',
            inGameRank: ''
        },
        {
            id: 16,
            name: 'Maverick',
            role: 'Moderator',
            avatar: MaverickPFP,
            robloxUsername: '',
            robloxUserId: '',
            inGameRank: ''
        },
        {
            id: 17,
            name: 'R_S',
            role: 'Moderator',
            avatar: R_SPFP,
            robloxUsername: '',
            robloxUserId: '',
            inGameRank: ''
        }
    ],
    trialModerator: [
        {
            id: 19,
            name: 'Kiepski',
            role: 'Trial Moderator',
            avatar: KiepskiPFP,
            robloxUsername: 'Kiepsky',
            robloxUserId: '643059035',
            inGameRank: ''
        }
    ],
  };

  const handleMemberMoreInfo = (member) => {
    setSelectedMember(member);
    console.log('Wybrany członek:', member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="staff-page">
      <Navbar />

      {/* --- Sekcja Hero --- */}
      <motion.section 
        className="staff-hero-section"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className="staff-hero-title"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {t('staff.title', 'MEET THE STAFF TEAM!')}
        </motion.h1>
        <motion.div 
          className="staff-hero-divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        ></motion.div>
      </motion.section>

      {/* --- Główny kontener treści --- */}
      <motion.main 
        className="staff-main-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {/* Faction Command */}
        <StaffRoleSection
          roleTitle={t('staff.roles.factionCommand', 'Faction Command')}
          members={staffData.factionCommand}
          onMemberMoreInfo={handleMemberMoreInfo}
        />

        {/* Faction Co Leader */}
        <StaffRoleSection
          roleTitle={t('staff.roles.factionCoLeader', 'Faction Co Leader')}
          members={staffData.factionCoLeader}
          onMemberMoreInfo={handleMemberMoreInfo}
        />

        {/* Technical Specialist */}
        <StaffRoleSection
          roleTitle={t('staff.roles.technicalSpecialist', 'Technical Specialist')}
          members={staffData.technicalSpecialist}
          onMemberMoreInfo={handleMemberMoreInfo}
        />

        {/* Trial Co Leader */}
        <StaffRoleSection
          roleTitle={t('staff.roles.trialCoLeader', 'Trial Co Leader')}
          members={staffData.trialCoLeader}
          onMemberMoreInfo={handleMemberMoreInfo}
        />

        {/* Elder */}
        <StaffRoleSection
          roleTitle={t('staff.roles.elder', 'Elder')}
          members={staffData.elder}
          onMemberMoreInfo={handleMemberMoreInfo}
        />

        {/* Trial Elder */}
        <StaffRoleSection
          roleTitle={t('staff.roles.trialElder', 'Trial Elder')}
          members={staffData.trialElder}
          onMemberMoreInfo={handleMemberMoreInfo}
        />

        {/* Intelligence */}
        <StaffRoleSection
          roleTitle={t('staff.roles.intelligence', 'Intelligence')}
          members={staffData.intelligence}
          onMemberMoreInfo={handleMemberMoreInfo}
        />

        {/* Head Administrator */}
        <StaffRoleSection
          roleTitle={t('staff.roles.headAdministrator', 'Head Administrator')}
          members={staffData.headAdministrator}
          onMemberMoreInfo={handleMemberMoreInfo}
        />

        {/* Senior Administrator */}
        <StaffRoleSection
          roleTitle={t('staff.roles.seniorAdministrator', 'Senior Administrator')}
          members={staffData.seniorAdministrator}
          onMemberMoreInfo={handleMemberMoreInfo}
        />

        {/* Administrator */}
        <StaffRoleSection
          roleTitle={t('staff.roles.administrator', 'Administrator (6 members)')}
          members={staffData.administrator}
          onMemberMoreInfo={handleMemberMoreInfo}
        />

        {/* Trial Administrator */}
        <StaffRoleSection
          roleTitle={t('staff.roles.trialAdministrator', 'Trial Administrator')}
          members={staffData.trialAdministrator}
          onMemberMoreInfo={handleMemberMoreInfo}
        />

        {/* Senior Moderator */}
        <StaffRoleSection
          roleTitle={t('staff.roles.seniorModerator', 'Senior Moderator')}
          members={staffData.seniorModerator}
          onMemberMoreInfo={handleMemberMoreInfo}
        />

        {/* Moderator */}
        <StaffRoleSection
          roleTitle={t('staff.roles.moderator', 'Moderator')}
          members={staffData.moderator}
          onMemberMoreInfo={handleMemberMoreInfo}
        />

        {/* Trial Moderator */}
        <StaffRoleSection
          roleTitle={t('staff.roles.trialModerator', 'Trial Moderator')}
          members={staffData.trialModerator}
          onMemberMoreInfo={handleMemberMoreInfo}
        />
      </motion.main>

      {/* --- Modal Staff Member --- */}
      <StaffMemberModal member={selectedMember} onClose={closeModal} />
    </div>
  );
}
