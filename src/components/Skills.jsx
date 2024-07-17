import React from "react";
import { useSelector } from "react-redux";
import "../css/Skills.css";

const Skills = () => {
  const language = useSelector((state) => state.language);

  return (
    <div className="skills">
      <h2>{language === "en" ? "Skills" : "Beceriler"}</h2>
      <div className="skill-list">
        <div className="skill-item">
          <h3>JavaScript</h3>
          <p>
            {language === "en"
              ? "I am capable of providing interactive and dynamic web experiences with JavaScript."
              : "JavaScript ile etkileşimli ve dinamik web deneyimleri sağlayabiliyorum."}
          </p>
        </div>
        <div className="skill-item">
          <h3>React.Js</h3>
          <p>
            {language === "en"
              ? "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              : "React ile modern ve dinamik kullanıcı arayüzleri oluşturma becerisine sahibim.."}
          </p>
        </div>
        <div className="skill-item">
          <h3>Node.Js</h3>
          <p>
            {language === "en"
              ? "I can develop scalable and high-performance server applications using Node.js."
              : "Node.js ile ölçeklenebilir ve yüksek performanslı sunucu uygulamaları geliştirebiliyorum."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
