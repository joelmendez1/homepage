import "./tag.scss";

type TagType = "WARNING" | "SUCCESS" | "ERROR";

interface TagProps {
  text: string;
  type: TagType;
}

function Tag({ text, type }: TagProps) {
  return (
    <span className={`tag tag__${type.toLowerCase()}`}>
      {text.toUpperCase()}
    </span>
  );
}

export default Tag;
