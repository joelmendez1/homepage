import { Link } from "react-router-dom";
import LinkComponent from "../core-components/link-component";

import "./navbar.scss";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <Link className="navbar__logo-container" to="/">
          <img
            src=""
            alt="project busters logo"
            className="navbar__logo-container__image"
          ></img>
          <h1 className="navbar__logo-container__title">Project Busters</h1>
        </Link>

        <nav className="navbar__container__buttons">
          <LinkComponent
            text="About Us"
            url="/about-us"
            className="navbar__container__buttons__link"
          />
          <LinkComponent
            text="Contact Us"
            url=""
            className="navbar__container__buttons__link"
          />
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
