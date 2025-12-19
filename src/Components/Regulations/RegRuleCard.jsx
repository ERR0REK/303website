// src/Components/Regulations/RegRuleCard.jsx

import React from 'react';

export default function RegRuleCard({ title, rules, delay = 0, number = '' }) {

  return (
    <div className="reg-rule-card">
      {number && <div className="reg-rule-section-number">{number}</div>}
      <div className="reg-rule-content">
        <h3 className="reg-rule-title">{title}</h3>
        <ul className="reg-rule-list">
          {rules.map((rule, index) => (
            <li
              key={index}
              className="reg-rule-item"
            >
              <span className="reg-rule-bullet"></span>
              <span>{rule}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}