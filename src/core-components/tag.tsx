import "./tag.scss";

type TagType = "WARNING" | "SUCCESS" | "ERROR";

interface TagProps {
  text: string;
  type: TagType;
}

export const Tag = ({ text, type }: TagProps) => {
  return (
    <span className={`tag tag__${type.toLowerCase()}`}>
      {text.toUpperCase()}
    </span>
  );
};
