import { PageTitle, Project } from "../components/components.js";
import { projectsPage } from "../assets/assets.js";
import { containerStyle } from "./styles.js";

const Projects = () => {

  return (
    <>
      { (projectsPage && projectsPage.length > 0) && 
        <div id="Projects" className={`${containerStyle}`}>
          <PageTitle title={"Projects"} />
          <div>
            <div className="grid grid-cols-1 bedar-sc2:grid-cols-2 gap-5">
              {projectsPage.map(
                ({
                  id,
                  projectName,
                  projectDescription,
                  projectURL,
                  githubRepositoryURL,
                  tags,
                  date,
                }) => (
                  <Project
                    key={id}
                    id={id}
                    projectName={projectName}
                    projectDescription={projectDescription}
                    projectURL={projectURL}
                    githubRepository={githubRepositoryURL}
                    tags={tags}
                    date={date}
                  />
                )
              )}
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Projects;
