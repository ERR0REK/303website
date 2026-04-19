import React from 'react';
import { FileText, Gavel, ShieldCheck, Zap } from 'lucide-react';

export default function RegRuleCard({ title, rules, delay = 0, number = '' }) {
  const getIcon = (num) => {
    switch (num) {
      case '01': return <FileText size={24} className="card-icon" />;
      case '02': return <Zap size={24} className="card-icon" />;
      case '03': return <Gavel size={24} className="card-icon" />;
      default: return <ShieldCheck size={24} className="card-icon" />;
    }
  };

  return (
    <div className={`reg-rule-card type-${number}`}>
      <div className="card-header">
        <div className="icon-box">
          {getIcon(number)}
        </div>
        <div className="header-info">
          {number && <div className="reg-rule-section-number">SEC_{number}</div>}
          <h3 className="reg-rule-title">{title}</h3>
        </div>
      </div>

      <div className="reg-rule-content">
        <ul className="reg-rule-list">
          {rules.map((rule, index) => (
            <li key={index} className="reg-rule-item">
              <div className="item-bullet"></div>
              <span className="item-text">{rule}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="card-scanner"></div>
      <div className="corner tl"></div><div className="corner tr"></div>
      <div className="corner bl"></div><div className="corner br"></div>
    </div>
  );
}