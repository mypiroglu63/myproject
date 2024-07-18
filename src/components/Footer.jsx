import React from "react";
import { useSelector } from "react-redux";
import FooterLink from "./FooterLink";
import "../css/Footer.css";

const Footer = () => {
  const language = useSelector((state) => state.language);
  const footerText = useSelector((state) => state.footerText);
  const footerLinkIds = useSelector((state) =>
    state.footerLinks.map((link) => link.id)
  );

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p className="p">{footerText[language]}</p>
          <p>
            <span className="icon">👉</span>
            <span className="email">{footerText.email}</span>
          </p>
        </div>
        <div className="footer-right">
          <div className="footer-linkss">
            {footerLinkIds.map((id) => (
              <FooterLink key={id} linkId={id} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
