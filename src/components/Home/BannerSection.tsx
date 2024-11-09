import headImage from '../../assets/head.jpg';

const BannerSection = () => {
  return (
    <section className="home">
      <div className="content">
        <h1 className="title">Empowering Tech, Enthusiast and Knowledge.</h1>
        <p className="desp">Come join us today by smashing the button below</p>
        <a href="#join" className="btn">Join Us</a>
      </div>
      <div className="image">
        <img src={headImage} alt="Head" className="move" />
      </div>
      <div id="hero-shape">
        <div id="hero1"></div>
        <div id="hero2"></div>
        <div id="hero3"></div>
      </div>
    </section>
  );
}

export default BannerSection;
