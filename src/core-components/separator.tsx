import "./separator.scss";

export type MarginType = "TOP" | "BOT" | "BOTH" | "NONE";
export interface SeparatorProps {
  className?: string;
  margin?: MarginType;
}

export const Separator = ({ className, margin }: SeparatorProps) => {
  return (
    <hr
      className={`separator separator__margin-${
        margin ? margin.toLocaleLowerCase() : "both"
      } ${className ? className : ""}`}
    />
  );
};
