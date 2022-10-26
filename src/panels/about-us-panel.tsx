import { Translate } from "../utils";

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
      title: Translate("SERVICE.SERVICE_CARDS.SECURITY_AND_FASTNESS.TITLE"),
      text: Translate("SERVICE.SERVICE_CARDS.SECURITY_AND_FASTNESS.TEXT"),
      iconUrl: "it-developer",
    },
    {
      title: Translate("SERVICE.SERVICE_CARDS.COMPETITIVE_PRICES.TITLE"),
      text: Translate("SERVICE.SERVICE_CARDS.COMPETITIVE_PRICES.TEXT"),
      iconUrl: "sale",
    },
    {
      title: Translate("SERVICE.SERVICE_CARDS.CONTINUOUS_IMPROVEMENT.TITLE"),
      text: Translate("SERVICE.SERVICE_CARDS.CONTINUOUS_IMPROVEMENT.TEXT"),
      iconUrl: "consultation",
    },
  ];

  const servicesDescription = Translate("SERVICE.SERVICE_DESCRIPTION");

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
        header={Translate("SERVICE.HEADER")}
      />
    </div>
  );
};
