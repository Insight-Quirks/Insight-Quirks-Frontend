const TeamCard = ({
  imgSrc = "",
  name = "",
  description = "",
  facebook = "",
  github = "",
  linkedin = "",
}) => (
  <div className="team-card">
    <img src={imgSrc} alt={name} />
    <h3>{name}</h3>
    <p>{description}</p>
    <div className="social-icons">
      {facebook && (
        <a href={facebook}>
          <i className="ri-facebook-fill"></i>
        </a>
      )}
      {github && (
        <a href={github}>
          <i className="ri-github-line"></i>
        </a>
      )}
      {linkedin && (
        <a href={linkedin}>
          <i className="ri-linkedin-fill"></i>
        </a>
      )}
    </div>
  </div>
);

export default TeamCard;
