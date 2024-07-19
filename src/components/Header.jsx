import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme, setLanguage } from "../redux/actions";
import NavigationLink from "./NavigationLink";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/Header.css";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const language = useSelector((state) => state.language);
  const navigationLinkIds = useSelector((state) =>
    state.navigationLinks.map((link) => link.id)
  );

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(setTheme(newTheme));
    if (theme === "light" && language === "en") {
      toast(`Dark mode is now active`);
    } else if (theme === "light" && language === "tr") {
      toast(`Karanlık mod aktif`);
    } else if (theme === "dark" && language === "tr") {
      toast(`Aydınlık mod aktif`);
    } else {
      toast(`Light mode is now active`);
    }
  };

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "tr" : "en";
    dispatch(setLanguage(newLanguage));
    if (newLanguage === "en") {
      toast(`Language changed to English`);
    } else {
      toast(`Dil Türkçe olarak değiştirildi`);
    }
  };

  return (
    <header className="header">
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{
          color: theme === "dark" ? "white" : "black",
        }}
      />
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
                <span className="highlight">TÜRKÇE</span>
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
