// src/Components/Regulations/RegRuleCard.jsx

import React from 'react';
import { motion } from 'framer-motion';

export default function RegRuleCard({ title, rules, delay = 0 }) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="reg-rule-card"
    >
      <h3 className="reg-rule-title">{title}</h3>
      <ul className="reg-rule-list">
        {rules.map((rule, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + index * 0.1 }}
            className="reg-rule-item"
          >
            <span className="reg-rule-bullet"></span>
            <span>{rule}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}