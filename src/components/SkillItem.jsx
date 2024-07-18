import React from "react";
import { useSelector } from "react-redux";

const SkillItem = ({ skillId }) => {
  const language = useSelector((state) => state.language);
  const skill = useSelector((state) =>
    state.skills.find((skill) => skill.id === skillId)
  );

  return (
    <div className="skill-item">
      <h3>{skill.name[language]}</h3>
      <p>{skill.description[language]}</p>
    </div>
  );
};

export default SkillItem;
