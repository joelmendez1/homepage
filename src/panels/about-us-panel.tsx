import { Translate } from "../utils/language-utils";

import { Member, MemberProps } from "../app-components";
import { Card, Header, ServiceCardProps, Services } from "../core-components";

import "./about-us-panel.scss";

export const AboutUsPanel = () => {
  const membersProps: MemberProps[] = [
    {
      fullname: "Lautaro Cesso",
      headline: "React Developer",
      profilePic: "lcesso.jpeg",
      socialNetworks: [
        { type: "linkedin", profile: "lautaro-cesso" },
        { type: "github", profile: "lautarocesso" },
        { type: "instagram", profile: "lautaro27c" },
      ],
      cvFileName: "LautaroCesso",
    },
    {
      fullname: "Joel Mendez",
      headline: "React Developer",
      profilePic: "jmendez.jpg",
      socialNetworks: [
        { type: "linkedin", profile: "joeleliasmendez" },
        { type: "github", profile: "joelmendez1" },
        { type: "instagram", profile: "mendez_joel7" },
      ],
      cvFileName: "JoelMendezEN",
    },
    {
      fullname: "Leonel Redigonda",
      headline: "React Developer",
      profilePic: "default.jpeg",
      socialNetworks: [
        { type: "linkedin", profile: "leonel-redigonda-809116194/" },
        { type: "github", profile: "Lredigonda" },
      ],
      cvFileName: "",
    },
  ];

  const services: ServiceCardProps[] = [
    {
      title: "Seguridad y velocidad",
      text: "Nuestro Equipo ofrece soluciones que van de la mano con los estándares de velocidad y seguridad presentes en el mercado actual.",
      iconUrl: "it-developer",
    },
    {
      title: "Precios competitivos",
      text: "Muchas otras consultoras nos piden apoyo o contratan nuestros servicios debido a que ofrecemos una propuesta de valor calidad/precio inigualable.",
      iconUrl: "sale",
    },
    {
      title: "Mejora continua",
      text: "Entendemos que los sistemas y procesos requieren una mejora continua como parte del ciclo de vida del desarrollo.",
      iconUrl: "consultation",
    },
  ];

  const servicesDescription =
    "Tenemos en cuenta un desarrollo escalable y diseñamos cada parte pensando en el crecimiento de su proyecto. Las interfaces son ciudadosamente planificadas por nuestro equipo UX siempre buscando la excelencia y perfección en cada proyecto.";

  return (
    <div className="about-us-panel">
      <Card className="about-us-panel__card" withBorder>
        <>
          <Header>{Translate("ABOUT.ABOUT_US")}</Header>
          <div className="about-us-panel__members">
            {membersProps.map((membersProp, index) => {
              const { fullname, profilePic } = membersProp;

              return (
                <Member
                  key={`member-${fullname}-pic-${profilePic}__${index}`}
                  {...membersProp}
                />
              );
            })}
          </div>
        </>
      </Card>
      <Services
        services={services}
        description={servicesDescription}
        header="SERVICES"
      />
    </div>
  );
};
