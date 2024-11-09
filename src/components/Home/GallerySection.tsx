import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import photo2Image from "../../assets/Photo2.jpg";
import headImage from "../../assets/head.jpg";
gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  useEffect(() => {
    // const tl = gsap.timeline({scrollTrigger:{
    //     trigger:"#gallery",
    //    //  markers:true,
    //     start:"50% 50%",
    //     end:"150% 50%",
    //     scrub:2,
    //     pin:true
    // }});
    // tl
    // .to("#center",{
    //    height: "100vh",
    // },'a')
    // .to("#top",{
    //     top: "-50%",
    //  },'a')
    //  .to("#bottom",{
    //     bottom: "-50%",
    //  },'a')
    // .to("#top-h1",{
    //     top: "60%"
    //  },'a')
    //  .to("#bottom-h1",{
    //     bottom: "-30%"
    //  },'a')
    // .to("#center-h1",{
    //    top: "-30%"
    // },'a')
    // .to(".content1",{
    //    delay: -0.2,
    //    marginTop: "0%"
    // })
  }, []);

  return (
    <div id="gallery">
      <div id="top">
        <h1 id="top-h1">GALLERY</h1>
      </div>
      <div id="center">
        <div className="content1">
          <section className="hero">
            <div className="hero__images">
              <img src={photo2Image} />
              <img src={photo2Image} />
              <img src={headImage} />
            </div>
          </section>
        </div>
      </div>
      <div id="bottom">
        <h1 id="bottom-h1">GALLERY</h1>
      </div>
    </div>
  );
};

export default Gallery;
