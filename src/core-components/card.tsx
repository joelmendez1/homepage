import "./card.scss";
import { Separator } from "./separator";

interface CardProps {
  children: JSX.Element;
  title?: string;
  className?: string;
  withBorder?: boolean;
}

export const Card = ({ children, title, className, withBorder }: CardProps) => {
  return (
    <div
      className={`card ${withBorder ? "border" : ""} ${
        className ? className : ""
      }`}
    >
      {title ? <h4 className="card__title">{title}</h4> : null}
      {title ? <Separator /> : null}
      {children}
    </div>
  );
};
