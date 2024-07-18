import React from "react";
import { useSelector } from "react-redux";

const FooterLink = ({ linkId }) => {
  const language = useSelector((state) => state.language);
  const link = useSelector((state) =>
    state.footerLinks.find((link) => link.id === linkId)
  );

  return (
    <a href={link.href} className={link.className}>
      {link.text[language]}
    </a>
  );
};

export default FooterLink;
