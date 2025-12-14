import React, { useState } from 'react';

const QAItem = ({ question, answer, index }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAnswer = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`qa-item ${isActive ? 'active' : ''}`}>
      <button className="qa-question" onClick={toggleAnswer}>
        <span>{question}</span>
        <span className="qa-toggle-icon">▼</span>
      </button>
      <div className="qa-answer">
        <div className="qa-answer-content">
          {Array.isArray(answer) ? (
            answer.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)
          ) : (
            <p>{answer}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default QAItem;
