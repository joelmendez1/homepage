import "./button.scss";

export const Button = ({
  className,
  children,
  ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <button className={`button ${className}`} {...props}>
      {children}
    </button>
  );
};
