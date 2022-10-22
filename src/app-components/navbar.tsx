import { Link } from "react-router-dom";

import { countries, Translate } from "../utils/language-utils";

import LanguageButton from "../core-components/language-button";
import LinkComponent from "../core-components/link-component";

import "./navbar.scss";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <Link className="navbar__logo-container" to="/">
          <img
            src={`${window.location.origin}/logo_transparent.png`}
            alt="project busters logo"
            className="navbar__logo-container__image"
          />
          <h1 className="navbar__logo-container__title">Project Busters</h1>
        </Link>

        <nav className="navbar__container__buttons">
          <LinkComponent
            text={Translate("HEADER.ABOUT_US")}
            url="/about-us"
            className="navbar__container__buttons__link"
          />
          <LinkComponent
            text={Translate("HEADER.CONTACT_US")}
            url="/contact-us"
            className="navbar__container__buttons__link"
          />
          <div className="navbar__languages">
            {countries.map(({ icon, language }) => (
              <LanguageButton
                key={`country-${icon}-language-${language}`}
                country={{ icon, language }}
              />
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
