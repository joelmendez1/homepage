import { Header, TechnologyCard } from "../core-components";

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
          <Header className="home-panel__technologies-title"> Tecnologias Utilizadas </Header>
          <p>
            Ofrecemos plataformas de desarrollo web a la medida, realizadas con
            los lenguajes de programación más potentes del mercado. <br />
            Te escuchamos, y al trabajar con metodologías ágiles nos enfocamos
            en hacer un prototipo que funcione y vamos mejorando de la mano
            contigo hasta obtener un producto viable.
          </p>
        </div>
        <TechnologyCard
          className="home-panel__technology-card"
          title="TECHNOLOGIES"
          technologies={technologyStack}
        />
      </div>
    </div>
  );
};
