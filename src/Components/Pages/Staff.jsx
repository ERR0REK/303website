import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import StaffRoleSection from "../Staff/StaffRoleSection";
import StaffMemberModal from "../Staff/StaffMemberModal";
import DecodedText from "../Shared/DecodedText";

import cygan221 from "../../Assets/StaffPFP/cygan221.png";
import vanish from "../../Assets/StaffPFP/vanish.webp";
import strongest from "../../Assets/StaffPFP/strongest.webp";
import cygan228 from "../../Assets/StaffPFP/cygan228.webp";
import wujek from "../../Assets/StaffPFP/wujek.webp";
import chicken from "../../Assets/StaffPFP/chicken.webp";
import wujcio from "../../Assets/StaffPFP/wujcio.webp";
import vl4dzy from "../../Assets/StaffPFP/vl4dzy.webp";
import tygo from "../../Assets/StaffPFP/tygo.webp";
import virtuozo from "../../Assets/StaffPFP/virtuozo.webp";
import bernie225gh from "../../Assets/StaffPFP/bernie225gh.webp";
import polakexe from "../../Assets/StaffPFP/polakexe.webp";
import madmax from "../../Assets/StaffPFP/madmax.webp";
import neonovikorol from "../../Assets/StaffPFP/neonovikorol.webp";
import batmangothamsaver from "../../Assets/StaffPFP/lewylewangolski.webp";
import lars from "../../Assets/StaffPFP/lars.webp";
import snowie from "../../Assets/StaffPFP/snowie.webp";

import "../Staff/Staff.css";

export default function Staff() {
  const { t } = useTranslation();
  const [selectedMember, setSelectedMember] = useState(null);

  const staffData = {
    factionCommand: [
      {
        id: 1,
        name: 'alibabadrutadala (cygan221)',
        role: 'Faction Command',
        avatar: cygan221,
        robloxUsername: '',
        robloxUserId: '', 
        inGameRank: 'Leader'
      },
      {
        id: 2,
        name: 'xaniszek__1 (⬧⟫𝚡𝚅𝚊𝚗𝚒𝚜𝚑⟪⬧)',
        role: 'Faction Command',
        avatar: vanish,
        robloxUsername: 'Kacper_12145',
        robloxUserId: '2760481598',
        inGameRank: ''
      },
      {
        id: 3,
        name: 'ezwtilovetsk (Strongest)',
        role: 'Faction Command',
        avatar: strongest,
        robloxUsername: 'mihason13',
        robloxUserId: '4108016131',
        inGameRank: ''
      },
    ],
    privateLeadersTranslator: [
      {
        id: 1,
        name: 'zer0_thefoo1 (Snowie)',
        role: 'Private Leader\'s Translator',
        avatar: snowie,
        robloxUsername: '',
        robloxUserId: '',
        inGameRank: ''
      }
    ],
    coFactionCommand: [
      {
        id: 1,
        name: 'miataiswashed (cygan228)',
        role: 'Co Faction Command',
        avatar: cygan228,
        robloxUsername: 'MolodoyySniper',
        robloxUserId: '4984338140',
        inGameRank: ''
      },
      {
        id: 2,
        name: 'muhmo3 (Stalibassador)',
        role: 'Co Faction Command',
        avatar: '',
        robloxUsername: 'muhmo11',
        robloxUserId: '2689932774',
        inGameRank: ''
      },
      {
        id: 3,
        name: 'silent8123487 (Wujek (Paul Hausser))',
        role: 'Co Faction Command',
        avatar: wujek,
        robloxUsername: 'Warcel09',
        robloxUserId: '3061429272',
        inGameRank: ''
      },
    ],
    trialCoFactionCommand: [
      {
        id: 1,
        name: 'chikkentikken (Chikkentikkenツ)',
        role: 'Trial Co Faction Command',
        avatar: chicken,
        robloxUsername: '',
        robloxUserId: '',
        inGameRank: ''
      }
    ],
    technicalSpecialist: [
      {
        id: 1,
        name: 'polonia.errorglitchtv (wujcio (Heinz Harmel))',
        role: 'Technical Specialist',
        avatar: wujcio,
        robloxUsername: 'ERR0R_Gl1tchTV',
        robloxUserId: '2537111023',
        inGameRank: ''
      }
    ],
    elder: [
      {
        id: 1,
        name: 'vl4dzy. (Vladivostok)',
        role: 'Elder',
        avatar: vl4dzy,
        robloxUsername: '',
        robloxUserId: '',
        inGameRank: ''
      }
    ],
    trialElder: [],
    headAdministrator: [],
    seniorAdministrator: [
      {
        id: 1,
        name: 'saurestygo (ＴｙｇｏＳａｕｒｅｓ)',
        role: 'Senior Administrator',
        avatar: tygo,
        robloxUsername: 'Tygosaures10',
        robloxUserId: '2659235860',
        inGameRank: ''
      }
    ],
    administrator: [
      {
        id: 1,
        name: 'mr_virtuozo (💥MR_VIRTUOZO ˢᶻᵉᶠ 💜)',
        role: 'Administrator',
        avatar: virtuozo,
        robloxUsername: 'w172b771',
        robloxUserId: '4499538218',
        inGameRank: ''
      }
    ],
    trialAdministrator: [],
    moderator: [
      {
        id: 1,
        name: 'bernie255gh (Clownpierce)',
        role: 'Moderator',
        avatar: bernie225gh,
        robloxUsername: '',
        robloxUserId: '',
        inGameRank: ''
      },
      {
        id: 2,
        name: 'polak.exe (Gerd Von Worken)',
        role: 'Moderator',
        avatar: polakexe,
        robloxUsername: 'Polskaexe_v3',
        robloxUserId: '8830479938',
        inGameRank: ''
      },
      {
        id: 3,
        name: 'madmax201112 (𝓜𝓪𝓭𝓜𝓪𝔁)',
        role: 'Moderator',
        avatar: madmax,
        robloxUsername: '',
        robloxUserId: '',
        inGameRank: ''
      },
      {
        id: 4,
        name: 'neonovikorol',
        role: 'Moderator',
        avatar: neonovikorol,
        robloxUsername: '',
        robloxUserId: '',
        inGameRank: ''
      },
      {
        id: 5,
        name: 'batmangothamsaver (Prawy Lewangolski)',
        role: 'Moderator',
        avatar: batmangothamsaver,
        robloxUsername: 'kubas16222',
        robloxUserId: '6114117187',
        inGameRank: ''
      },
    ],
    trialModerator: [
      {
        id: 1,
        name: 'menschenleben (Lars)',
        role: 'Trial Moderator',
        avatar: lars,
        robloxUsername: '',
        robloxUserId: '',
        inGameRank: ''
      }
    ],
  };

  const handleMemberMoreInfo = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="staff-page">
      {/* Background Elements */}
      <div className="staff-bg-container">
        <div className="staff-bg-grid"></div>
        <div className="staff-bg-nodes"></div>
        <div className="staff-bg-overlay"></div>
      </div>

      <Navbar />

      {/* --- Sekcja Hero --- */}
      <motion.section
        className="staff-hero-section"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="staff-hero-title">
          <DecodedText 
            text={t("staff.title", "MEET THE STAFF TEAM!")} 
            delay={0.2} 
          />
        </h1>
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
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
            }
          }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
      >
        {/* Faction Command */}
        <StaffRoleSection
          roleTitle={t("staff.roles.factionCommand")}
          members={staffData.factionCommand}
          onMemberMoreInfo={handleMemberMoreInfo}
        />

        {/* Private Leader's Translator */}
        <StaffRoleSection
          roleTitle={t("staff.roles.privateLeadersTranslator")}
          members={staffData.privateLeadersTranslator}
          onMemberMoreInfo={handleMemberMoreInfo}
        />

        {/* Co Faction Command */}
        <StaffRoleSection
          roleTitle={t("staff.roles.coFactionCommand")}
          members={staffData.coFactionCommand}
          onMemberMoreInfo={handleMemberMoreInfo}
        />

        {/* Trial Co Faction Command */}
        <StaffRoleSection
          roleTitle={t("staff.roles.trialCoFactionCommand")}
          members={staffData.trialCoFactionCommand}
          onMemberMoreInfo={handleMemberMoreInfo}
        />

        {/* Technical Specialist */}
        <StaffRoleSection
          roleTitle={t("staff.roles.technicalSpecialist")}
          members={staffData.technicalSpecialist}
          onMemberMoreInfo={handleMemberMoreInfo}
        />

        {/* Elder */}
        <StaffRoleSection
          roleTitle={t("staff.roles.elder")}
          members={staffData.elder}
          onMemberMoreInfo={handleMemberMoreInfo}
        />

        {/* Trial Elder */}
        <StaffRoleSection
          roleTitle={t("staff.roles.trialElder")}
          members={staffData.trialElder}
          onMemberMoreInfo={handleMemberMoreInfo}
        />

        {/* Head Administrator */}
        <StaffRoleSection
          roleTitle={t("staff.roles.headAdministrator")}
          members={staffData.headAdministrator}
          onMemberMoreInfo={handleMemberMoreInfo}
        />

        {/* Senior Administrator */}
        <StaffRoleSection
          roleTitle={t("staff.roles.seniorAdministrator")}
          members={staffData.seniorAdministrator}
          onMemberMoreInfo={handleMemberMoreInfo}
        />

        {/* Administrator */}
        <StaffRoleSection
          roleTitle={t("staff.roles.administrator")}
          members={staffData.administrator}
          onMemberMoreInfo={handleMemberMoreInfo}
        />

        {/* Trial Administrator */}
        <StaffRoleSection
          roleTitle={t("staff.roles.trialAdministrator")}
          members={staffData.trialAdministrator}
          onMemberMoreInfo={handleMemberMoreInfo}
        />

        {/* Moderator */}
        <StaffRoleSection
          roleTitle={t("staff.roles.moderator")}
          members={staffData.moderator}
          onMemberMoreInfo={handleMemberMoreInfo}
        />

        {/* Trial Moderator */}
        <StaffRoleSection
          roleTitle={t("staff.roles.trialModerator")}
          members={staffData.trialModerator}
          onMemberMoreInfo={handleMemberMoreInfo}
        />
      </motion.main>

      {/* --- Modal Staff Member --- */}
      <StaffMemberModal member={selectedMember} onClose={closeModal} />
    </div>
  );
}
