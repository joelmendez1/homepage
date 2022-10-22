import { Link } from "react-router-dom";
import "./link-component.scss";

interface LinkComponentProps {
  url: string;
  text: string;
  elipsis?: boolean;
  className?: string;
  isExternal?: boolean;
}

const LinkComponent = ({
  url,
  text,
  elipsis,
  className,
  isExternal,
}: LinkComponentProps) => {
  return isExternal ? (
    <a
      className={`link ${elipsis ? "elipsis" : ""} ${className}`}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  ) : (
    <Link className={`link ${elipsis ? "elipsis" : ""} ${className}`} to={url}>
      {text}
    </Link>
  );
};

export default LinkComponent;
