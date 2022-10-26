import { Header, Card } from "../core-components";
import Computer from "../assets/computer.svg";

import "./technology-card.scss";

interface TechnologyCardProps {
  title: string;
  technologies: string[];
  className?: string;
}

export const TechnologyCard = ({
  title,
  technologies,
  className = "",
}: TechnologyCardProps) => {
  return (
    <Card className={`${className} technology-card`} withBorder>
      <div className="technology-card__container">
        <img
          className="technology-card__image"
          src={Computer}
          alt="computer-icon"
        />
        <Header className="technology-card__title">{title}</Header>
        <div className="technology-card__technologies">
          {technologies.map((technology, index) => {
            return (
              <img
                className="technology-card__icon"
                src={`${window.location.origin}/technology-icons/${technology}.svg`}
                key={technology}
                alt={technology}
              />
            );
          })}
        </div>
      </div>
    </Card>
  );
};
