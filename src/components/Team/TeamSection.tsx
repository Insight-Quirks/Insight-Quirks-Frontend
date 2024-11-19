// import TeamCard from "./TeamCard";

// const teamMembers = [
//   {
//     imgSrc: "/team/Nishant.jpg",
//     name: "Nishant Bhadke",
//     description:
//       "Experienced .NET Core developer with 2+ years in C#, ASP.NET Core, and SQL Server. Proficient in backend systems, RESTful APIs, and AWS services. Detail-oriented, on-time delivery, open to collaboration.",
//     facebook: "#",
//     github: "#",
//     linkedin: "#",
//   },
//   {
//     imgSrc: "/team/Himanshu.jpg",
//     name: "Himanshu Bundela",
//     description:
//       "Experienced programmer with a strong background in software development. Seeking a role with ABC Company to solve client business problems using diverse programming languages.",
//     facebook: "#",
//     github: "#",
//     linkedin: "#",
//   },
//   {
//     imgSrc: "/team/Abbas.jpg",
//     name: "Abbas Kapasi",
//     description:
//       "Software Developer Trainee at ESDS Software Pvt Ltd and Buzinessware. Redhat Certified System Administrator with experience in Node.js and React.js.",
//     facebook: "#",
//     github: "#",
//     linkedin: "#",
//   },
//   {
//     imgSrc: "/team/Prashant.jpg",
//     name: "Prashant Pagare",
//     description:
//       "Experienced programmer with a strong background in software development. Seeking a role with ABC Company to solve client business problems using diverse programming languages.",
//     facebook: "#",
//     github: "#",
//     linkedin: "#",
//   },
//   {
//     imgSrc: "/team/Kunal.jpg",
//     name: "Kunal",
//     description:
//       "Experienced programmer with a strong background in software development. Seeking a role with ABC Company to solve client business problems using diverse programming languages.",
//     facebook: "#",
//     github: "#",
//     linkedin: "#",
//   },
//   {
//     imgSrc: "/team/Abhishek.jpg",
//     name: "Abhishek Nikam",
//     description:
//       "Experienced programmer with a strong background in software development. Seeking a role with ABC Company to solve client business problems using diverse programming languages.",
//     facebook: "#",
//     github: "#",
//     linkedin: "#",
//   },
//   {
//     imgSrc: "/team/Akash.jpeg",
//     name: "Akash",
//     description:
//       "Experienced programmer with a strong background in software development. Seeking a role with ABC Company to solve client business problems using diverse programming languages.",
//     facebook: "#",
//     github: "#",
//     linkedin: "#",
//   },
//   {
//     imgSrc: "/team/Tejas.jpg",
//     name: "Tejas Patil",
//     description:
//       "Experienced programmer with a strong background in software development. Seeking a role with ABC Company to solve client business problems using diverse programming languages.",
//     facebook: "#",
//     github: "#",
//     linkedin: "#",
//   },
//   {
//     imgSrc: "/team/Suchita.jpeg",
//     name: "Suchita Tripathi",
//     description:
//       "Experienced programmer with a strong background in software development. Seeking a role with ABC Company to solve client business problems using diverse programming languages.",
//     facebook: "#",
//     github: "#",
//     linkedin: "#",
//   },
//   {
//     imgSrc: "/team/Swati.jpg",
//     name: "Swathi Santoshkumar",
//     description:
//       "Experienced programmer with a strong background in software development. Seeking a role with ABC Company to solve client business problems using diverse programming languages.",
//     facebook: "#",
//     github: "#",
//     linkedin: "#",
//   },
//   {
//     imgSrc: "/team/Mehevish.jpg",
//     name: "Mehevish",
//     description:
//       "Experienced programmer with a strong background in software development. Seeking a role with ABC Company to solve client business problems using diverse programming languages.",
//     facebook: "#",
//     github: "#",
//     linkedin: "#",
//   },
//   {
//     imgSrc: "/team/Anushka.jpg",
//     name: "Anushka",
//     description:
//       "Experienced programmer with a strong background in software development. Seeking a role with ABC Company to solve client business problems using diverse programming languages.",
//     facebook: "#",
//     github: "#",
//     linkedin: "#",
//   },
// ];
// const TeamSection = () => (
//   <section className="team-section">
//     <h2>Our Team</h2>
//     <p>
//       Every Club needs someone at Lead to guide, support and show you the right
//       path...
//     </p>
//     <div className="team-cards">
//       {teamMembers.map((member, index) => (
//         <TeamCard
//           key={index}
//           imgSrc={member.imgSrc}
//           name={member.name}
//           description={member.description}
//           facebook={member.facebook}
//           github={member.github}
//           linkedin={member.linkedin}
//         />
//       ))}
//     </div>
//   </section>
// );

// export default TeamSection;

import React, { useState } from 'react';
// import { Users } from 'lucide-react';
import TeamCard from './TeamCard';
// import './TeamSection.css';


const teamMembers = [
  {
    name: "Nishant Bhadke",
    role: "Chief Technology Officer",
    description: "Experienced .NET Core developer with 2+ years in C#, ASP.NET Core, and SQL Server. Proficient in backend systems, RESTful APIs, and AWS services. Detail-oriented, on-time delivery, open to collaboration.",
    imgSrc: "/team/Nishant.jpg",
    github: "https://github.com",
    portfolio: "https://portfolio.com",
    linkedin: "https://linkedin.com/in/nishant-bhadke-983837185"
  },
  {
    name: "Himanshu Bundela",
    role: "Head of Engineering",
    description: "Experienced programmer with a strong background in software development. Seeking a role with ABC Company to solve client business problems using diverse programming languages.",
    imgSrc: "/team/Himanshu.jpg",
    github: "https://github.com",
    portfolio: "https://portfolio.com",
    linkedin: "https://linkedin.com/in/himanshu-bundela-04376b1aa"
  },
  {
    name: "Abbas Kapasi",
    role: "Head of Engineering",
    description: "Software Developer Trainee at ESDS Software Pvt Ltd and Buzinessware. Redhat Certified System Administrator with experience in Node.js and React.js.",
    imgSrc: "/team/Abbas.jpg",
    github: "https://github.com",
    portfolio: "https://portfolio.com",
    linkedin: "https://linkedin.com/in/abbas-kapasi-21a604169/"
  },
  {
    name: "Yash ",
    role: "Head of Engineering",
    description: "",
    imgSrc: "/team/",
    github: "https://github.com",
    portfolio: "https://portfolio.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Kunal",
    role: "Head of Engineering",
    description: "",
    imgSrc: "/team/Kunal.jpg",
    github: "https://github.com",
    portfolio: "https://portfolio.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Kavita Marar",
    role: "Head of Engineering",
    description: "Experienced programmer with a strong background in software development. Seeking a role with ABC Company to solve client business problems using diverse programming languages.",
    imgSrc: "/team/Himanshu.jpg",
    github: "https://github.com",
    portfolio: "https://portfolio.com",
    linkedin: "https://linkedin.com/in/kavita-marar-986ba7230/"
  },
  {
    name: "Abhishek Nikam",
    role: "Head of Engineering",
    description: "Experienced programmer with a strong background in software development. Seeking a role with ABC Company to solve client business problems using diverse programming languages.",
    imgSrc: "/team/Abhishek.jpg",
    github: "https://github.com",
    portfolio: "https://abhisheknikam.onrender.com",
    linkedin: "https://linkedin.com/in/abhishek-nikam"
  },
  {
    name: "Rushikesh Bhatjire",
    role: "Head of Engineering",
    description: "Experienced programmer with a strong background in software development. Seeking a role with ABC Company to solve client business problems using diverse programming languages.",
    imgSrc: "/team/",
    github: "https://github.com",
    portfolio: "https://rushikesh-bhatjire.pentaspirit.com",
    linkedin: "https://linkedin.com/in/rushikeshbhatjire"
  },
  {
    name: "Rital Rajput",
    role: "Head of Engineering",
    description: "Experienced programmer with a strong background in software development. Seeking a role with ABC Company to solve client business problems using diverse programming languages.",
    imgSrc: "/team/",
    github: "https://github.com",
    portfolio: "https://portfolio.com",
    linkedin: "https://linkedin.com/in/ritalrajput369"
  },
  {
    name: "Suchita Tripathi",
    role: "Head of Engineering",
    description: "Experienced programmer with a strong background in software development. Seeking a role with ABC Company to solve client business problems using diverse programming languages.",
    imgSrc: "/team/Suchita.jpeg",
    github: "https://github.com",
    portfolio: "https://portfolio.com",
    linkedin: "https://linkedin.com/in/suchita-tripathi-5a3546221"
  },
  {
    name: "Pooja Belbase",
    role: "Head of Engineering",
    description: "Experienced programmer with a strong background in software development. Seeking a role with ABC Company to solve client business problems using diverse programming languages.",
    imgSrc: "/team/",
    github: "https://github.com",
    portfolio: "https://portfolio.com",
    linkedin: "https://linkedin.com/in/pooja-belbase-6a5712208"
  },
  {
    name: "Swathi Santoshkumar",
    role: "UX Designer",
    description: "Experienced programmer with a strong background in software development. Seeking a role with ABC Company to solve client business problems using diverse programming languages.",
    imgSrc: "/team/Swati.jpg",
    github: "https://github.com/Swathisk01",
    portfolio: "https://swathisk.wixsite.com/website",
    linkedin: "https://linkedin.com/in/swathi-santoshkumar"
  },
  // ... rest of the team members
];

const TeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  const playSound = () => {
    const audio = new Audio('/sounds/tech-click.mp3');
    audio.play().catch(error => console.log('Audio playback failed:', error));
  };

  const handleMemberClick = (memberName: string) => {
    playSound();
    setSelectedMember(selectedMember === memberName ? null : memberName);
  };

//   return (
//     <div className="team-container">
//       <div className="team-header">
//         <div className="icon-wrapper">
//           <div className="icon-background" />
//           <Users className="team-icon" />
//         </div>
//         <h1>OUR TEAM</h1>
//         <p className="team-description">
//           A dedicated team, driven by the common goal of creating the infrastructure to disrupt existing financial barriers.
//         </p>
//       </div>

//       <div className="members-list">
//         {teamMembers.map((member, index) => (
//           <TeamCard
//             key={index}
//             {...member}
//             isSelected={selectedMember === member.name}
//             onClick={() => handleMemberClick(member.name)}
//           />
//         ))}
//       </div>

//       <div className="more-team">
//         <h2>MORE TEAM</h2>
//       </div>
//     </div>
//   );
// };



return (
  <div className="team-container">
  <div className="team-header">
  <h1 className="experience-text">EXPERIENCE MEETS<br />QUIRKINESS</h1>
  <p className="subtext">
    SAY HELLO TO OUR QUIRKY TEAM WHICH THRIVES ON CURIOSITY, PROBLEM-SOLVING, AND A SHARED PINCH OF DIFFERENT SKILLS.
  </p>
</div>
    
    <div className="marquee-container">
      <div className="marquee-title">
        MEET THE TEAM •<span> MEET THE TEAM •</span> MEET THE TEAM • 
      </div>
    </div>

   

    <div className="members-list">
      {teamMembers.map((member, index) => (
        <TeamCard
          key={index}
          {...member}
          isSelected={selectedMember === member.name}
          onClick={() => handleMemberClick(member.name)}
        />
      ))}
    </div>
  </div>
);
};

export default TeamSection;
