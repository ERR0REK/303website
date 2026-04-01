import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../Navbar/Navbar";
import WarLogCard from "./WarLogCard";
import WarLogModal from "./WarLogModal";
import DecodedText from "../Shared/DecodedText";
import "./WarLogs.css";
import { AnimatePresence, motion } from "framer-motion";

const WarLogs = () => {
  const { t } = useTranslation();
  const [selectedLog, setSelectedLog] = useState(null);

  // Real Data with Translation Keys
  const logs = [
    {
      id: 1,
      opponent: t("warLogs.war1.opponent"),
      date: "2026-01-18",
      result: "EASY_WIN",
      duration: t("warLogs.war1.duration"),
      mvp: "@Hejhej01928, @Polskaexe_v3",
      reason: t("warLogs.war1.reason"),
      members: t("warLogs.war1.members"),
      victoryImg:
        "https://placehold.co/1200x600/0a0f18/38bdf8?text=Victory+Celebration+Nightfall",
      enemyKD: [
        { name: "@Rushwinter", kills: 1, deaths: 10 },
        { name: "@imsocool_leon", kills: 2, deaths: 3 },
        { name: "@lucularo", kills: 0, deaths: 4 },
        { name: "@umgqqqqqqqaa", kills: 14, deaths: 16 },
        { name: "@Birkpro12", kills: 3, deaths: 20 },
        { name: "@renopro203", kills: 7, deaths: 5 },
      ],
      memberKD: [
        { name: "@Hejhej01928", kills: 54, deaths: 20 },
        { name: "@Polskaexe_v3", kills: 11, deaths: 5 },
        { name: "@Pioter_M200", kills: 0, deaths: 1 },
        { name: "@Tygosaures10", kills: 6, deaths: 0 },
        { name: "@SAMISALAMI7", kills: 17, deaths: 10 },
      ],
    },
    {
      id: 2,
      opponent: t("warLogs.war2.opponent"),
      date: "2026-03-06",
      result: "EASY_WIN",
      duration: t("warLogs.war2.duration"),
      mvp: "@SAMISALAMI7, @kamilekbrz",
      reason: t("warLogs.war2.reason"),
      note: t("warLogs.war2.note"),
      members: t("warLogs.war2.members"),
      victoryImg:
        "https://placehold.co/1200x600/0a0f18/38bdf8?text=Victory+Celebration+Nightfall",
      enemyKD: [
        { name: "@ZT_buny (Domixi)", kills: 3, deaths: 8 },
        { name: "@xqivubf (Mrbeast)", kills: 8, deaths: 8 },
        { name: "rip_coolboy", kills: 2, deaths: 14 },
        { name: "@n123yup (Voltking_Cambodian)", kills: 7, deaths: 16 },
        { name: "Jotbread", kills: 6, deaths: 13 },
        { name: "skills", kills: 6, deaths: 11 },
        {
          name: "@ngodangkhoa190 lub @tuanminhiq (ngodangkhoa190)",
          kills: 12,
          deaths: 5,
        },
        { name: "@dungsimpchua (Archer)", kills: 0, deaths: 0 },
        { name: "@Rip_iwantmagma (uwu)", kills: 2, deaths: 7 },
      ],
      memberKD: [
        { name: "@SAMISALAMI7 (KeithCozart)", kills: 36, deaths: 9 },
        { name: "@kamilekbrz (Mleszyk)", kills: 38, deaths: 8 },
        { name: "@KralEfe9952 (Dark_Elite52)", kills: 1, deaths: 1 },
      ],
    },
    {
      id: 3,
      opponent: t("warLogs.war3.opponent"),
      date: "2026-03-08",
      result: "EASY_WIN",
      duration: t("warLogs.war3.duration"),
      mvp: "ERR0R_Gl1tchTV",
      reason: t("warLogs.war3.reason"),
      note: t("warLogs.war3.note"),
      members: t("warLogs.war3.members"),
      victoryImg:
        "https://placehold.co/1200x600/0a0f18/38bdf8?text=Victory+Celebration+Nightfall",
      enemyKD: [
        { name: "Dawid_Polska1345", kills: 6, deaths: 3 },
        { name: "szymkoxyz", kills: 4, deaths: 5 },
        { name: "kubixer20", kills: 14, deaths: 47 },
      ],
      memberKD: [
        {name: "ERR0R_Gl1tchTV", kills: 8 , deaths: 2},
        {name: "MICHALgalar2010", kills: 27, deaths: 17},
        {name: "SAMISALAMI7", kills: 27, deaths: 15},
      ]
    },
  ];

  return (
    <div className="warlogs-page">
      <Navbar />
      <div className="warlogs-bg"></div>

      <motion.div
        className="warlogs-container"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
      >
        <header className="warlogs-header">
          <h1
            className="glitch-text"
            data-text={t("warLogs.title", "WAR LOGS")}
          >
            <DecodedText text={t("warLogs.title", "WAR LOGS")} delay={0.2} />
          </h1>
          <div className="header-decoration">
            <span className="deco-line"></span>
            <span className="deco-tech">:: ARCHIVE ACCESS ::</span>
            <span className="deco-line"></span>
          </div>
        </header>

        {logs.length > 0 ? (
          <div className="warlogs-grid">
            {logs.map((log, index) => (
              <WarLogCard
                key={log.id}
                log={log}
                onClick={() => setSelectedLog(log)}
                delay={index * 0.1}
              />
            ))}
          </div>
        ) : (
          <motion.div
            className="warlogs-empty-state"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="empty-icon-container">
              <div className="radar-sweep"></div>
              <div className="empty-icon">❄️</div>
            </div>
            <h2 className="empty-title">
              {t("common.comingSoon", "COMING SOON")}
            </h2>
            <p className="empty-subtitle">:: NO ACTIVE CONFLICTS DETECTED ::</p>
            <p className="empty-desc">
              The database is currently synchronizing with command headquarters.
              <br />
              Please check back later for mission reports.
            </p>
          </motion.div>
        )}
      </motion.div>

      <AnimatePresence>
        {selectedLog && (
          <WarLogModal log={selectedLog} onClose={() => setSelectedLog(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default WarLogs;
