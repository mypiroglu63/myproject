import React from "react";
import { useSelector } from "react-redux";
import ProjectItem from "./ProjectItem";
import "../css/Projects.css";

const Projects = () => {
  const language = useSelector((state) => state.language);
  const projectIds = useSelector((state) =>
    state.projects.map((project) => project.id)
  );

  return (
    <div className="projects">
      <h2>{language === "en" ? "Projects" : "Projeler"}</h2>
      <div className="project-list">
        {projectIds.map((id) => (
          <ProjectItem key={id} projectId={id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
