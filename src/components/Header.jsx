import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme, setLanguage } from "../redux/actions";
import NavigationLink from "./NavigationLink";
import "../css/Header.css";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const language = useSelector((state) => state.language);
  const navigationLinkIds = useSelector((state) =>
    state.navigationLinks.map((link) => link.id)
  );

  const toggleTheme = () => {
    dispatch(setTheme(theme === "light" ? "dark" : "light"));
  };

  const toggleLanguage = () => {
    dispatch(setLanguage(language === "en" ? "tr" : "en"));
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="header-right">
          <div className={`theme-toggle ${theme}`} onClick={toggleTheme}>
            <div className="toggle-circle">
              {theme === "light" ? "☀️" : "🌙"}
            </div>
          </div>
          <div className="mode-text">
            {theme === "light"
              ? language === "en"
                ? "LIGHT MODE"
                : "AYDINLIK MOD"
              : language === "en"
              ? "DARK MODE"
              : "KARANLIK MOD"}
          </div>
          <div className="language-toggle" onClick={toggleLanguage}>
            {language === "en" ? (
              <>
                <span className="highlight">TÜRKÇE</span>'
                <span className="normal">YE GEÇ</span>
              </>
            ) : (
              "ENGLISH"
            )}
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="header-left"></div>
        <div className="logo">M</div>
        <nav className="navi">
          {navigationLinkIds.map((id) => (
            <NavigationLink key={id} linkId={id} />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
