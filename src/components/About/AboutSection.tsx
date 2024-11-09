import "./aboutSection.css";

const AboutSection = () => {
  const aboutData = [
    {
      id: "1",
      title: "Who we are?",
      content:
        "Insight Quirks Club is a vibrant community focused on sparking creativity and collaboration. We're all about pushing the boundaries, embracing new ideas, and making a positive impact. Join us, and let's innovate together",
      headingClass: "he1",
    },
    {
      id: "2",
      title: "What we do?",
      content:
        "Inspire Creativity: We host ideation workshops to spark innovative thinking. Learn and Grow: We provide learning opportunities to expand your knowledge and skills. Collaborate: We encourage teamwork and offer resources for project development. Connect: We organize networking events for valuable connections and experiences.",
      headingClass: "he2",
    },
    {
      id: "3",
      title: "How we meet?",
      content:
        "Insight Quirks emerged from a diverse mix of alumni, seasoned professionals, and enthusiasts across various domains who shared a passion for unique perspectives and knowledge sharing. Our club was born out of a desire to create a vibrant community where unconventional thinking, creativity, and curiosity thrive. Today, we're a growing family, united by our quirks and driven by the collective insight we bring to the table.",
      headingClass: "he1",
    },
  ];

  return (
    <section className="about-teamc">
      {aboutData.map((section) => (
        <div key={section.id} id="team">
          <div id="team-cont">
            <h1 className={section.headingClass}>{section.title}</h1>
            <p>{section.content}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AboutSection;
