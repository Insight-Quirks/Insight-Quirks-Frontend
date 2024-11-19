// const TeamCard = ({
//   imgSrc = "",
//   name = "",
//   description = "",
//   facebook = "",
//   github = "",
//   linkedin = "",
// }) => (
//   <div className="team-card">
//     <img src={imgSrc} alt={name} />
//     <h3>{name}</h3>
//     <p>{description}</p>
//     <div className="social-icons">
//       {facebook && (
//         <a href={facebook}>
//           <i className="ri-facebook-fill"></i>
//         </a>
//       )}
//       {github && (
//         <a href={github}>
//           <i className="ri-github-line"></i>
//         </a>
//       )}
//       {linkedin && (
//         <a href={linkedin}>
//           <i className="ri-linkedin-fill"></i>
//         </a>
//       )}
//     </div>
//   </div>
// );

// export default TeamCard;

import React from 'react';
import { Github, Globe, Linkedin } from 'lucide-react';
// import './TeamCard.css';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  imgSrc: string;
  github: string;
  portfolio: string;
  linkedin: string;
  isSelected: boolean;
  onClick: () => void;
}

const TeamCard: React.FC<TeamMemberProps> = ({
  name,
  role,
  description,
  imgSrc,
  github,
  portfolio,
  linkedin,
  isSelected,
  onClick,
}) => {
  return (
    <div className="team-member-container">
      <div className="team-member-header" onClick={onClick}>
        <div className="member-info">
          <span className="arrow">→</span>
          <span className="member-name">{name}</span>
        </div>
        <span className="member-role">{role}</span>
      </div>
      
      {isSelected && (
        <div className="member-details">
          <div className="member-image-container">
            <img src={imgSrc} alt={name} className="member-image" />
          </div>
          <div className="member-content">
            <p className="member-description">{description}</p>
            <div className="social-links">
              <a href={github} className="social-link" target="_blank" rel="noopener noreferrer">
                <Github className="social-icon" />
              </a>
              <a href={portfolio} className="social-link" target="_blank" rel="noopener noreferrer">
                <Globe className="social-icon" />
              </a>
              <a href={linkedin} className="social-link" target="_blank" rel="noopener noreferrer">
                <Linkedin className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamCard;