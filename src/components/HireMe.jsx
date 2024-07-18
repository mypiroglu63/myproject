import React from "react";
import { useSelector } from "react-redux";
import "../css/HireMe.css";
import HireMeButton from "./Button Componentleri/HireMeButton";
import GitHubButton from "./Button Componentleri/GitHubButton";
import LinkedInButton from "./Button Componentleri/LinkedInButton";

const HireMe = () => {
  const theme = useSelector((state) => state.theme);
  const language = useSelector((state) => state.language);
  const hireMeData = useSelector((state) => state.hireMe);

  const currentText = language === "en" ? hireMeData.en : hireMeData.tr;

  return (
    <section className={`hire-me-section ${theme}`}>
      <div className="hire-me-content">
        <div className="hire-me-text">
          <div className="name">{hireMeData.name}</div>
          <h1>{currentText.heading}</h1>
          <p>{currentText.paragraph}</p>
          <div className="hire-me-buttons">
            <HireMeButton text={currentText.hireMe} />
            <GitHubButton text={currentText.github} />
            <LinkedInButton text={currentText.linkedin} />
          </div>
        </div>
        <div className="hire-me-image">
          <img src={hireMeData.image} alt="Hire me" />
        </div>
      </div>
    </section>
  );
};

export default HireMe;
