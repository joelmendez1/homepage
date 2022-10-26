import { Card } from "./card";

import "./service-card.scss";

export interface ServiceCardProps {
  className?: string;
  title: string;
  text: string;
  iconUrl: string;
}

export const ServiceCard = ({
  className = "",
  title,
  text,
  iconUrl,
}: ServiceCardProps) => {
  return (
    <Card className={`service-card ${className}`} withBorder>
      <>
        <img
          src={`${window.location.origin}/icons/${iconUrl}.webp`}
          alt="service icon"
          className="service-card__icon"
        />
        <h1 className="service-card__title">{title}</h1>
        <p className="service-card__text">{text}</p>
      </>
    </Card>
  );
};
