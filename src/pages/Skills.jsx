import { skillsPage } from "../assets/assets.js";
import { PageTitle } from "../components/components.js";
import { containerStyle } from "./styles.js";

const Skills = () => {
  return (
    <>
      {(skillsPage && skillsPage.length > 0) && (
        <div id="Skills" className={`${containerStyle}`}>
          <PageTitle title={"Skills"} />
          <div className="flex gap-4 text-white flex-wrap justify-center bedar-sc1:justify-start">
            {skillsPage.map(({ icon: Icon, label }, index) => (
              <div key={index} className="flex flex-col items-center gap-1.5 skill-icon cursor-pointer">
                <Icon className="h-16 w-16 bg-[var(--bg-card)] text-[var(--text-on-card)] p-2 rounded shadow-md shadow-[#000]/15 transition-colors duration-300" />
                <span className="text-xs font-medium text-[var(--text-secondary)]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Skills;
