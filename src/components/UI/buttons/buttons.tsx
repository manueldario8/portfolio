import { useTheme } from "../../../context/ThemeContext";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  const { theme } = useTheme();

  return (
    <button className={`btn btn-${theme}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;