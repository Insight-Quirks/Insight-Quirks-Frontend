import { BlogDataType } from "./utils";

const Sidebar = ({ sections = [] }: { sections: BlogDataType }) => {
  const scrollToSection = (id = "") => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="sidebar">
      <h3>Explore More</h3>
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <a onClick={() => scrollToSection(section.id)}>
              {section.subheading}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
