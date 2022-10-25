import { Translate } from "../utils/language-utils";

import { DarkModeButton, Separator } from "../core-components";

import "./footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container__top">
          <div className="footer__container__left">
            <img
              src={`${window.location.origin}/logo_transparent.png`}
              className="footer__logo"
              alt="project busters logo"
            />
            <h2 className="footer__container__title">
              {Translate("FOOTER.POWERED_BY")} Project Busters
            </h2>
          </div>
          <div className="footer__container__right">
            <DarkModeButton />
          </div>
        </div>
        <Separator className="footer__separator" />
        <div className="footer__container__bottom">
          <div className="footer__container__left">
            <div className="footer__container__copyright">
              Project Busters © 2022
            </div>
          </div>
          <div className="footer__container__right"></div>
        </div>
      </div>
    </footer>
  );
};
