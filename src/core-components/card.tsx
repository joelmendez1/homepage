import { ReactNode } from "react";

import { Separator } from "./separator";

import "./card.scss";

interface CardProps {
  children: ReactNode;
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
