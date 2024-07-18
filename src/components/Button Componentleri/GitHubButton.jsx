import React from "react";

const GitHubButton = ({ text }) => {
  return (
    <a
      href="https://github.com/mypiroglu63"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="btn github">
        <i className="fab fa-github"></i> {text}
      </button>
    </a>
  );
};

export default GitHubButton;
