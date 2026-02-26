import { FaFolderOpen } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const Project = ({
  id,
  projectName,
  projectDescription,
  projectURL,
  githubRepository,
  tags,
  date,
}) => {
    const navigate = useNavigate();

    const handleCardClick = (e) => {
      if (e.target.closest('a')) return;
      navigate(`/project/${id}`);
    };

    return (
      <div 
        onClick={handleCardClick}
        className="flex flex-col bg-[var(--bg-card)] text-[var(--text-on-card)] p-5 bedar-sc2:p-8 rounded-md border border-[var(--border-color)] shadow card-hover transition-colors duration-300 cursor-pointer"
      >
        <FaFolderOpen className="w-6 h-6" />
        <strong className="mt-5 mb-2 text-2xl text-[var(--accent)]">
          {projectName}
        </strong>
        <div className="mb-2">{projectDescription}</div>
        <div>{tags}</div>
        <div className="flex items-center justify-between mt-10">
          <div>{date}</div>
          <div className="flex gap-2">
            {projectURL && (
              <a href={projectURL} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                <IoEyeSharp title="Live demo" className="w-6 h-6" />
              </a>
            )}

            {githubRepository && (
              <a href={githubRepository} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                <IoLogoGithub title="Source Code" className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>
      </div>
    );
};

export default Project;
