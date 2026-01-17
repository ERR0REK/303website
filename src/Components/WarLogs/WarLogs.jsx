import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../Navbar/Navbar";
import WarLogCard from "./WarLogCard";
import WarLogModal from "./WarLogModal";
import "./WarLogs.css";
import { AnimatePresence, motion } from "framer-motion";

const WarLogs = () => {
  const { t } = useTranslation();
  const [selectedLog, setSelectedLog] = useState(null);

  // Mock Data - Cleared as requested
  const logs = [
    //{
    //id: 2,
    //opponent: "Dark Alliance",
    //date: "2026-01-10",
    //map: "Downtown",
    //result: "LOSS",
    //duration: "18 minutes",
    //mvp: "Plantinaxi",
    //reason: "Byli lepiej przygotowani",
    //members: "Plantinaxi, G4L4XY, miko_o1",
    //img: "https://via.placeholder.com/400x200?text=War+Defeat"
  //},
  ];

  return (
    <div className="warlogs-page">
      <Navbar />
      <div className="warlogs-bg"></div>

      <div className="warlogs-container">
        <header className="warlogs-header">
          <h1
            className="glitch-text"
            data-text={t("warLogs.title", "WAR LOGS")}
          >
            {t("warLogs.title", "WAR LOGS")}
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
      </div>

      <AnimatePresence>
        {selectedLog && (
          <WarLogModal log={selectedLog} onClose={() => setSelectedLog(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default WarLogs;
