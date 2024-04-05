import Skills from "./SkillsComponent.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";
export default function MainContent() {
  return (
    <div className="w-full h-max mt-5 pb-10">
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
