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
}

const Member = ({
  profilePic,
  fullname,
  headline,
  socialNetworks,
}: MemberProps) => {
  return (
    <Card withBorder className="member">
      <>
        <img
          className="member__profile-pic"
          src={`${window.location.origin}/${profilePic}`}
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

        <Button
          className="member__download-button"
          onClick={() => {
            console.warn("TODO: Create download cv function");
          }}
        >
          Download CV
        </Button>
      </>
    </Card>
  );
};

export default Member;
