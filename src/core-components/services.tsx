import { Header } from "./header";
import { ServiceCard, ServiceCardProps } from "./service-card";

import "./services.scss";

interface ServicesProps {
  services: ServiceCardProps[];
  description: string;
  header: string;
}

export const Services = ({ services, description, header }: ServicesProps) => {
  return (
    <div className="services">
      <div className="services__info-container">
        <Header className="services__info-container__header">{header}</Header>

        <p className="services__info-container__description">{description}</p>
      </div>
      <div className="services__cards-container">
        {services.map((service) => {
          return <ServiceCard key={service.title} {...service} />;
        })}
      </div>
    </div>
  );
};
