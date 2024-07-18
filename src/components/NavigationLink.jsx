import React from "react";
import { useSelector } from "react-redux";

const NavigationLink = ({ linkId }) => {
  const language = useSelector((state) => state.language);
  const link = useSelector((state) =>
    state.navigationLinks.find((link) => link.id === linkId)
  );

  return <a href={link.href}>{link.text[language]}</a>;
};

export default NavigationLink;
