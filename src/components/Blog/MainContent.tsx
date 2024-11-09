import { BlogType } from "./utils";

const MainContent = ({ blogData }: { blogData: BlogType }) => {
  const {
    title = "",
    subtitle = "",
    image = "",
    data: sections = [],
  } = blogData;
  return (
    <main className="content">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      {image && <img src={image} alt="Blog Cover" className="cover-image" />}

      {sections.map((section) => (
        <section key={section.id} id={section.id}>
          <h3>{section.subheading}</h3>
          <p>{section.description}</p>
        </section>
      ))}
    </main>
  );
};

export default MainContent;
