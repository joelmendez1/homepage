import { Translate } from "../utils";

import {
  Card,
  SocialButton,
  SocialButtonProps,
  Button,
} from "../core-components";

import "./member.scss";

export interface MemberProps {
  profilePic: string;
  fullname: string;
  headline: string;
  socialNetworks: SocialButtonProps[];
  cvFileName: string;
}

export const Member = ({
  profilePic,
  fullname,
  headline,
  socialNetworks,
  cvFileName,
}: MemberProps) => {
  const handleClick = () => {
    fetch(`/member-resumes/${cvFileName}.pdf`).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        const alink = document.createElement("a");

        alink.href = fileURL;
        alink.download = `${cvFileName}.pdf`;
        alink.click();
      });
    });
  };

  return (
    <Card withBorder className="member">
      <>
        <img
          className="member__profile-pic"
          src={`${window.location.origin}/member-pictures/${profilePic}`}
          alt={fullname}
        />

        <div className="member__headers">
          <h2 className="member__fullname">{fullname}</h2>
          <h4 className="member__headline">{headline}</h4>
        </div>

        <div className="member__social-links">
          {socialNetworks.map((socialNetwork, index) => (
            <SocialButton
              key={`profile-${fullname}-network-${socialNetwork}__${index}`}
              {...socialNetwork}
            />
          ))}
        </div>

        <Button className="member__download-button" onClick={handleClick}>
          {Translate("ABOUT.DOWNLOAD_CV")}
        </Button>
      </>
    </Card>
  );
};
