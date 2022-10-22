import "./header.scss";

export interface HeaderProps {
  children: string;
  className?: string;
}

const Header = ({ className = "", children }: HeaderProps) => {
  return <h1 className={`header ${className}`}>{children}</h1>;
};

export default Header;
