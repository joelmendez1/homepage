import Member, { MemberProps } from "../app-components/member";
import Card from "../core-components/card";
import Header from "../core-components/header";

import "./about-us-panel.scss";

function AboutUsPanel() {
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
      profilePic: "default.jpeg",
      socialNetworks: [
        { type: "linkedin", profile: "joeleliasmendez" },
        { type: "github", profile: "joelmendez1" },
      ],
      cvFileName: "",
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

  return (
    <div className="about-us-panel">
      <Card className="about-us-panel__card" withBorder>
        <>
          <Header>About Us</Header>
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
    </div>
  );
}

export default AboutUsPanel;
