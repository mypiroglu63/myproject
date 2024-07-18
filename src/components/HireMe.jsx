import React from "react";
import { useSelector } from "react-redux";
import "../css/HireMe.css";
import HireMeButton from "./Button Componentleri/HireMeButton";
import GitHubButton from "./Button Componentleri/GitHubButton";
import LinkedInButton from "./Button Componentleri/LinkedInButton";

const HireMe = () => {
  const theme = useSelector((state) => state.theme);
  const language = useSelector((state) => state.language);

  const text = {
    en: {
      heading: "Architect of Digital Transformation",
      paragraph:
        "Hello, I'm Mehmet Yasin Piroğlu. I am a full-stack developer. If you are looking for a developer to create robust and scalable web applications, meet me, who offers user-focused and impactful solutions. I am here to take your projects to the next level with an innovative and minimalist approach.",
      hireMe: "Hire me",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    tr: {
      heading: "Dijital Dönüşümün Mimarı",
      paragraph:
        "Merhaba, ben Mehmet Yasin Piroğlu. Tam yığın bir geliştiriciyim. Sağlam ve ölçeklenebilir web uygulamaları oluşturacak bir geliştirici arıyorsanız, kullanıcı odaklı ve etkileyici çözümler sunan benimle tanışın. Yenilikçi ve minimalist yaklaşımla projelerinizi bir üst seviyeye taşımak için buradayım",
      hireMe: "Beni işe al",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
  };

  const currentText = language === "en" ? text.en : text.tr;

  return (
    <section className={`hire-me-section ${theme}`}>
      <div className="hire-me-content">
        <div className="hire-me-text">
          <div className="name">Mehmet Yasin Piroğlu</div>
          <h1>{currentText.heading}</h1>
          <p>{currentText.paragraph}</p>
          <div className="hire-me-buttons">
            <HireMeButton text={currentText.hireMe} />
            <GitHubButton text={currentText.github} />
            <LinkedInButton text={currentText.linkedin} />
          </div>
        </div>
        <div className="hire-me-image">
          <img
            src="src/assets/56cbf71b-ddb6-40d4-9be7-897a68611739.jpg"
            alt="Hire me"
          />
        </div>
      </div>
    </section>
  );
};

export default HireMe;
