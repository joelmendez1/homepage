import "./custom-error-message-component.scss";

const CustomErrorMessageComponent = ({
  children,
  className = "",
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => {
  return <p className={`error-message ${className}`}>{children}</p>;
};

export default CustomErrorMessageComponent;
