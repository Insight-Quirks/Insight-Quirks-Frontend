import connectImage from '../../assets/Connect (2).png';
import learnImage from '../../assets/learn (2).png';
import teamImage from '../../assets/Team (2).png';

const WhySection = () => {
  return (
    <div className="work" id='w-section'>
      <h1>Why Insight Quirks?</h1>
      <div className="services-container">
        <div className="service-box">
          <div className="service-content">
            <h2>Connect and Network</h2>
            <p>Build valuable connections with experts and peers.</p>
          </div>
          <img src={connectImage} alt="Connect Service" />
        </div>

        <div className="service-box">
          <img src={learnImage} alt="Learn by Doing" />
          <div className="service-content">
            <h2>Learn By Doing</h2>
            <p>Hands-on projects prepare you for real-world challenges</p>
          </div>
        </div>

        <div className="service-box">
          <div className="service-content">
            <h2>Foster Leadership</h2>
            <p>Develop personal and professional growth through roles and responsibilities.</p>
          </div>
          <img src={teamImage} alt="Foster Leadership" />
        </div>
      </div>
    </div>
  );
};

export default WhySection;
