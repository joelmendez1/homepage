import "./custom-error-message-component.scss";

export const CustomErrorMessageComponent = ({
  children,
  className = "",
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => {
  return <p className={`error-message ${className}`}>{children}</p>;
};
