import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { projectsPage } from "../assets/assets.js";
import { ImageCarousel } from "../components/components.js";
import { IoArrowBack, IoLogoGithub } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsPage.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <Link
          to="/"
          className="flex items-center gap-2 text-[var(--accent)] hover:underline"
        >
          <IoArrowBack /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-[var(--text-primary)] transition-colors duration-300">
      {/* Hero Banner */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-[var(--accent)]/5" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-[var(--accent)]/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl animate-pulse-slow" />

        <div className="relative max-w-[1200px] mx-auto px-5 bedar-sc1:px-20 pt-10 pb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[var(--accent)] hover:underline mb-8 opacity-0 animate-fadeInUp btn-hover px-4 py-2 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] backdrop-blur-sm"
          >
            <IoArrowBack /> Back to Projects
          </Link>

          <div className="opacity-0 animate-fadeInUp delay-100">
            <h1 className="text-4xl bedar-sc2:text-5xl font-bold text-[var(--accent)] mb-4 accent-glow">
              {project.projectName}
            </h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-3xl mb-6 leading-relaxed">
              {project.projectDescription}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 opacity-0 animate-fadeInUp delay-200">
            {project.tags.split(", ").map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-full text-sm font-medium backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
            <span className="flex items-center gap-2 px-4 py-1.5 text-sm text-[var(--text-secondary)]">
              <FaCalendarAlt className="w-3.5 h-3.5" />
              {project.date}
            </span>
          </div>

          {(project.githubRepositoryURL || project.projectURL) && (
            <div className="flex gap-3 mt-6 opacity-0 animate-fadeInUp delay-300">
              {project.githubRepositoryURL && (
                <a
                  href={project.githubRepositoryURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-full hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] transition-all duration-300 btn-hover backdrop-blur-sm font-medium text-sm"
                >
                  <IoLogoGithub className="w-5 h-5" />
                  Source Code
                </a>
              )}
              {project.projectURL && (
                <a
                  href={project.projectURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--accent)] text-white rounded-full hover:opacity-90 transition-all duration-300 btn-hover font-medium text-sm"
                >
                  <IoEyeSharp className="w-5 h-5" />
                  Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-5 bedar-sc1:px-20 pb-16">
        {/* Carousel Section */}
        {project.screenshots && project.screenshots.length > 0 && (
          <section className="mb-10 opacity-0 animate-fadeInUp delay-300">
            <ImageCarousel screenshots={project.screenshots} />
          </section>
        )}

        {/* Content Cards Grid */}
        <div className="grid grid-cols-1 bedar-sc2:grid-cols-2 gap-6">
          {/* About Card - Full Width */}
          <div className="bedar-sc2:col-span-2 opacity-0 animate-fadeInUp delay-400">
            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-6 bedar-sc2:p-8 card-hover backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4 text-[var(--accent)] flex items-center gap-2">
                <span className="w-1 h-6 bg-[var(--accent)] rounded-full" />
                About This Project
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {project.fullDescription || project.projectDescription}
              </p>
            </div>
          </div>

          {/* Features Card */}
          {project.features && project.features.length > 0 && (
            <div className="opacity-0 animate-fadeInUp delay-400">
              <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-6 bedar-sc2:p-8 card-hover backdrop-blur-sm h-full">
                <h2 className="text-xl font-semibold mb-4 text-[var(--accent)] flex items-center gap-2">
                  <span className="w-1 h-6 bg-[var(--accent)] rounded-full" />
                  Key Features
                </h2>
                <ul className="space-y-3 text-[var(--text-secondary)]">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--accent)] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Challenges & Learnings stacked */}
          <div className="flex flex-col gap-6">
            {project.challenges && (
              <div className="opacity-0 animate-fadeInUp delay-400">
                <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-6 bedar-sc2:p-8 card-hover backdrop-blur-sm">
                  <h2 className="text-xl font-semibold mb-4 text-[var(--accent)] flex items-center gap-2">
                    <span className="w-1 h-6 bg-[var(--accent)] rounded-full" />
                    Challenges Faced
                  </h2>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {project.challenges}
                  </p>
                </div>
              </div>
            )}

            {project.learnings && (
              <div className="opacity-0 animate-fadeInUp delay-400">
                <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-6 bedar-sc2:p-8 card-hover backdrop-blur-sm">
                  <h2 className="text-xl font-semibold mb-4 text-[var(--accent)] flex items-center gap-2">
                    <span className="w-1 h-6 bg-[var(--accent)] rounded-full" />
                    What I Learned
                  </h2>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {project.learnings}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
