import React from "react";
import { useSelector } from "react-redux";
import "../css/Footer.css";

const Footer = () => {
  const language = useSelector((state) => state.language);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p className="p">
            {language === "en"
              ? "Let's work together on your next product."
              : "Bir sonraki ürününüzde birlikte çalışalım."}
          </p>
          <p>
            <span className="icon">👉</span>
            <span className="email">mypiroglu63@gmail.com</span>
          </p>
        </div>
        <div className="footer-right">
          <div className="footer-linkss">
            <a href="#hireme" className="footer-personal">
              Personal Blog
            </a>
            <a href="https://github.com/mypiroglu63" className="footer-github">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mehmet-yasin-piro%C4%9Flu-079223224/"
              className="footer-linkedin"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
