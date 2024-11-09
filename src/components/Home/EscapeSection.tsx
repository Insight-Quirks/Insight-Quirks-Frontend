import React from 'react';

const EscapeSection: React.FC = () => {
  return (
    <div id="escape">
      <button>Escape</button>
      <video autoPlay loop muted src="https://www.rejouice.com/assets/videos/RJ-BALL-BLUE-ORANGE-scaled.webm"></video>
      <svg className="abs tl:0 fit transform rotate:-90deg" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="49" stroke="#fff" strokeWidth="0.25" fill="none"></circle>
      </svg>
    </div>
  );
};

export default EscapeSection;
