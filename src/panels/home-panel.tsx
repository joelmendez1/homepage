import { Header, TechnologyCard } from "../core-components";
import { Translate } from "../utils";

import "./home-panel.scss";

const technologyStack: string[] = [
  "javascript",
  "html-5",
  "css3",
  "sass",
  "react-native",
  "redux",
  "git",
  "github",
  "typescript",
];

export const HomePanel = () => {
  return (
    <div className="home-panel">
      <div className="home-panel__technologies">
        <div className="home-panel__technologies-description">
          <Header className="home-panel__technologies-title">
            {Translate("HOME_PANEL.HEADER")}
          </Header>
          <p>
            {Translate("HOME_PANEL.FIRST_PHRASE")} <br />
            {Translate("HOME_PANEL.SECOND_PHRASE")}
          </p>
        </div>
        <TechnologyCard
          className="home-panel__technology-card"
          title={Translate("HOME_PANEL.TITLE")}
          technologies={technologyStack}
        />
      </div>
    </div>
  );
};
