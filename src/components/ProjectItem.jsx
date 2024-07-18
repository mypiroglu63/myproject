import React from "react";
import { useSelector } from "react-redux";
import "../css/ProjectItem.css";

const ProjectItem = ({ projectId }) => {
  const language = useSelector((state) => state.language);
  const project = useSelector((state) =>
    state.projects.find((project) => project.id === projectId)
  );

  return (
    <div className="project-item">
      {project.mediaType === "video" ? (
        <video
          src={project.mediaSrc}
          alt={project.title[language]}
          className="project-media"
          controls
        />
      ) : (
        <img
          src={project.mediaSrc}
          alt={project.title[language]}
          className="project-media"
        />
      )}
      <h3>{project.title[language]}</h3>
      <p>{project.description[language]}</p>
      <div className="project-tags">
        {project.tags.map((tag, index) => (
          <span key={index} className="project-tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="project-links">
        <a href={project.github}>GitHub</a>
        <a href={project.site}>View Site</a>
      </div>
    </div>
  );
};

export default ProjectItem;
