import { useContext } from "react";

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ThemeContext } from "../app";

import "../core-components/darkmode-button.scss";

const DarkModeButton = () => {
  const { theme, switchTheme } = useContext(ThemeContext);

  const toggleDarkMode = () => {
    switchTheme();
  };

  return (
    <button className="darkmode-button" onClick={toggleDarkMode}>
      <FontAwesomeIcon
        icon={theme === "light" ? faMoon : faSun}
        className="darkmode-button__icon"
      />
    </button>
  );
};
export default DarkModeButton;
