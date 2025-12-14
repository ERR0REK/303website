import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../Navbar/Navbar';
import StaffRoleSection from '../Staff/StaffRoleSection';
import StaffMemberModal from '../Staff/StaffMemberModal';

/* Importowanie obrazków członków kadry */

import elizaPFP from '../../Assets/StaffMembersPFP/36e5d4f5ccd2f159d1ac57fd2ab92e5e.png';
import AdiovesPFP from '../../Assets/StaffMembersPFP/8f62a77bcce10853d9b4fd95dfb3cb09.png';
import TymussPFP from '../../Assets/StaffMembersPFP/e1287b612a70f551b591e25e51e1cbca.png';
import AlexPFP from '../../Assets/StaffMembersPFP/9997665ead5ed30104f179a8c12a46e2.png';
import SLX_EX0T1CPFP from '../../Assets/StaffMembersPFP/a49246889bf4422acada8e3449840541.png';
import PlantinaxiPFP from '../../Assets/StaffMembersPFP/4a253a9a28f3232ce1253d0c171dfdb2.png';
import AshPFP from '../../Assets/StaffMembersPFP/df1fc1d6937c6bf0797bf29abdee53e9.png';
import tippthegamerPFP from '../../Assets/StaffMembersPFP/7648648bfb9f62dcfd4da8c71968d863.png';
import G4L4XYPFP from '../../Assets/StaffMembersPFP/f64423435c808532100ef3c195fa59c7.png';
import miko_o1PFP from '../../Assets/StaffMembersPFP/ff6a77b5b7dfa9ab6e6bb951ef69af2e.png';
import chillin_noodlesPFP from '../../Assets/StaffMembersPFP/9cce7bd866036ac68de1582f05b7ec84.png';
import SilentPFP from '../../Assets/StaffMembersPFP/042fd81b3c68b3e97b388bc01a3dd8fe.png';
import tippsDadPFP from '../../Assets/StaffMembersPFP/328a6fd8d926c63621da1247c86617d3.png';
import Bob_BudowniczyPFP from '../../Assets/StaffMembersPFP/86c99d3891efb5d080759bdc75b63ccd.png';
import kabanosPFP from '../../Assets/StaffMembersPFP/936ab1041cf0e62de55fc4071574e1e7.png';
import MaverickPFP from '../../Assets/StaffMembersPFP/b2e0f9a41b665db5a51feca5ac71ea42.png';
import R_SPFP from '../../Assets/StaffMembersPFP/647a67f5498a9219ff376f53defc46f2.png';
import SnowiePFP from '../../Assets/StaffMembersPFP/bfba88f3e8863fefff3e1392553908eb.png';
import KiepskiPFP from '../../Assets/StaffMembersPFP/c6969f00c3fefeaa60adbfa867a0fe60.png';

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
        robloxUsername: '',
        robloxUserId: '', // Dodaj ID profilu
        inGameRank: 'Leader'
      },
      {
        id: 11,
        name: 'Adioves',
        role: 'Faction Command',
        avatar: AdiovesPFP,
        robloxUsername: 'Adioves',
        robloxUserId: '2340877754', // Dodaj ID profilu
        inGameRank: ''
      }
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
        id: 12,
        name: 'Alex',
        role: 'Faction Co Leader',
        avatar: AlexPFP,
        robloxUsername: '',
        robloxUserId: '',
        inGameRank: ''
      }
    ],
    technicalSpecialist: [
      {
        id: 3,
        name: 'SLX_EX0T1C',
        role: 'Technical Specialist',
        avatar: SLX_EX0T1CPFP,
        robloxUsername: '',
        robloxUserId: '',
        inGameRank: ''
      },
    ],
    trialCoLeader: [],
    elder: [],
    trialElder: [
        {
            id: 4,
            name: 'Plantinaxi',
            role: 'Trial Elder',
            avatar: PlantinaxiPFP,
            robloxUsername: '',
            robloxUserId: '',
            inGameRank: ''
        },
        {
            id: 13,
            name: 'Ash',
            role: 'Trial Elder',
            avatar: AshPFP,
            robloxUsername: '',
            robloxUserId: '',
            inGameRank: ''
        }
    ],
    intelligence: [],
    headAdministrator: [
        {
            id: 14,
            name: 'tippthegamer',
            role: 'Head Administrator',
            avatar: tippthegamerPFP,
            robloxUsername: '',
            robloxUserId: '',
            inGameRank: ''
        }
    ],
    seniorAdministrator: [],
    administrator: [
      {
        id: 5,
        name: 'G4L4XY',
        role: 'Administrator',
        avatar: G4L4XYPFP,
        robloxUsername: '',
        robloxUserId: '',
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
            robloxUsername: '',
            robloxUserId: '',
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
            id: 18,
            name: 'Snowie',
            role: 'Trial Moderator',
            avatar: SnowiePFP,
            robloxUsername: '',
            robloxUserId: '',
            inGameRank: ''
        },
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
      <section className="staff-hero-section">
        <h1 className="staff-hero-title">{t('staff.title', 'MEET THE STAFF TEAM!')}</h1>
        <div className="staff-hero-divider"></div>
      </section>

      {/* --- Główny kontener treści --- */}
      <main className="staff-main-container">
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
      </main>

      {/* --- Modal Staff Member --- */}
      <StaffMemberModal member={selectedMember} onClose={closeModal} />
    </div>
  );
}
