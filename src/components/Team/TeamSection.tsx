import TeamCard from "./TeamCard";

const teamMembers = [
  {
    imgSrc: "/team/Nishant.jpg",
    name: "Nishant Bhadke",
    description:
      "Experienced .NET Core developer with 2+ years in C#, ASP.NET Core, and SQL Server. Proficient in backend systems, RESTful APIs, and AWS services. Detail-oriented, on-time delivery, open to collaboration.",
    facebook: "#",
    github: "#",
    linkedin: "#",
  },
  {
    imgSrc: "/team/Himanshu.jpg",
    name: "Himanshu Bundela",
    description:
      "Experienced programmer with a strong background in software development. Seeking a role with ABC Company to solve client business problems using diverse programming languages.",
    facebook: "#",
    github: "#",
    linkedin: "#",
  },
  {
    imgSrc: "/team/Abbas.jpg",
    name: "Abbas Kapasi",
    description:
      "Software Developer Trainee at ESDS Software Pvt Ltd and Buzinessware. Redhat Certified System Administrator with experience in Node.js and React.js.",
    facebook: "#",
    github: "#",
    linkedin: "#",
  },
  {
    imgSrc: "/team/Prashant.jpg",
    name: "Prashant Pagare",
    description:
      "Experienced programmer with a strong background in software development. Seeking a role with ABC Company to solve client business problems using diverse programming languages.",
    facebook: "#",
    github: "#",
    linkedin: "#",
  },
  {
    imgSrc: "/team/Kunal.jpg",
    name: "Kunal",
    description:
      "Experienced programmer with a strong background in software development. Seeking a role with ABC Company to solve client business problems using diverse programming languages.",
    facebook: "#",
    github: "#",
    linkedin: "#",
  },
  {
    imgSrc: "/team/Abhishek.jpg",
    name: "Abhishek Nikam",
    description:
      "Experienced programmer with a strong background in software development. Seeking a role with ABC Company to solve client business problems using diverse programming languages.",
    facebook: "#",
    github: "#",
    linkedin: "#",
  },
  {
    imgSrc: "/team/Akash.jpeg",
    name: "Akash",
    description:
      "Experienced programmer with a strong background in software development. Seeking a role with ABC Company to solve client business problems using diverse programming languages.",
    facebook: "#",
    github: "#",
    linkedin: "#",
  },
  {
    imgSrc: "/team/Tejas.jpg",
    name: "Tejas Patil",
    description:
      "Experienced programmer with a strong background in software development. Seeking a role with ABC Company to solve client business problems using diverse programming languages.",
    facebook: "#",
    github: "#",
    linkedin: "#",
  },
  {
    imgSrc: "/team/Suchita.jpeg",
    name: "Suchita Tripathi",
    description:
      "Experienced programmer with a strong background in software development. Seeking a role with ABC Company to solve client business problems using diverse programming languages.",
    facebook: "#",
    github: "#",
    linkedin: "#",
  },
  {
    imgSrc: "/team/Swati.jpg",
    name: "Swathi Santoshkumar",
    description:
      "Experienced programmer with a strong background in software development. Seeking a role with ABC Company to solve client business problems using diverse programming languages.",
    facebook: "#",
    github: "#",
    linkedin: "#",
  },
  {
    imgSrc: "/team/Mehevish.jpg",
    name: "Mehevish",
    description:
      "Experienced programmer with a strong background in software development. Seeking a role with ABC Company to solve client business problems using diverse programming languages.",
    facebook: "#",
    github: "#",
    linkedin: "#",
  },
  {
    imgSrc: "/team/Anushka.jpg",
    name: "Anushka",
    description:
      "Experienced programmer with a strong background in software development. Seeking a role with ABC Company to solve client business problems using diverse programming languages.",
    facebook: "#",
    github: "#",
    linkedin: "#",
  },
];
const TeamSection = () => (
  <section className="team-section">
    <h2>Our Team</h2>
    <p>
      Every Club needs someone at Lead to guide, support and show you the right
      path...
    </p>
    <div className="team-cards">
      {teamMembers.map((member, index) => (
        <TeamCard
          key={index}
          imgSrc={member.imgSrc}
          name={member.name}
          description={member.description}
          facebook={member.facebook}
          github={member.github}
          linkedin={member.linkedin}
        />
      ))}
    </div>
  </section>
);

export default TeamSection;
