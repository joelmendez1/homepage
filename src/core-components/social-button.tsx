import "./social-button.scss";

const socialUrls = {
  twitter: "https://twitter.com",
  linkedin: "https://www.linkedin.com/in",
  github: "https://github.com",
  instagram: "https://www.instagram.com",
};

type socialNetwork = "twitter" | "linkedin" | "github" | "instagram";

interface SocialButtonProps {
  type: socialNetwork;
  profile: string;
}

const SocialButton = ({ type, profile }: SocialButtonProps) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={`${socialUrls[type]}/${profile}`}
      className="social-button"
    >
      <img
        className={`social-button__icon ${type}`}
        src={`${window.location.origin}/${type}.svg`}
      />
    </a>
  );
};

export default SocialButton;
