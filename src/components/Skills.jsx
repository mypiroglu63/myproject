import React from "react";
import { useSelector } from "react-redux";
import SkillItem from "./SkillItem";
import "../css/Skills.css";

const Skills = () => {
  const language = useSelector((state) => state.language);
  const skillIds = useSelector((state) =>
    state.skills.map((skill) => skill.id)
  );

  return (
    <div className="skills">
      <h2>{language === "en" ? "Skills" : "Beceriler"}</h2>
      <div className="skill-list">
        {skillIds.map((id) => (
          <SkillItem key={id} skillId={id} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
