import { Translate } from "../utils/language-utils";

import Button from "../core-components/button";
import Card from "../core-components/card";
import SocialButton, {
  SocialButtonProps,
} from "../core-components/social-button";

import "./member.scss";

export interface MemberProps {
  profilePic: string;
  fullname: string;
  headline: string;
  socialNetworks: SocialButtonProps[];
  cvFileName: string;
}

const Member = ({
  profilePic,
  fullname,
  headline,
  socialNetworks,
  cvFileName,
}: MemberProps) => {
  const handleClick = () => {
    // using Java Script method to get PDF file
    fetch(`${cvFileName}.pdf`).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
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
          src={`${window.location.origin}/${profilePic}`}
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

export default Member;
