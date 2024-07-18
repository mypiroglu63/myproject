import React from "react";

const LinkedInButton = ({ text }) => {
  return (
    <a
      href="https://www.linkedin.com/in/mehmet-yasin-piro%C4%9Flu-079223224/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="btn linkedin">
        <i className="fab fa-linkedin"></i> {text}
      </button>
    </a>
  );
};

export default LinkedInButton;
