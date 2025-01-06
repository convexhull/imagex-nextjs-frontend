// Styles
import classes from "./Button.module.css";

type ButtonProps = {
  theme: string;
  clicked?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  type?: "submit" | "reset" | "button";
};

const Button = ({ theme, clicked, disabled, children, type }: ButtonProps) => {
  const elementClasses = [classes["Button"]];
  if (theme === "facebook") {
    elementClasses.push(classes["facebook-btn"]);
  }
  if (theme === "imagex-default") {
    elementClasses.push(classes["imagex-default-btn"]);
  }
  return (
    <button
      type={type}
      className={elementClasses.join(" ")}
      onClick={clicked}
      disabled={disabled}
    >
      {" "}
      {children}{" "}
    </button>
  );
};

export default Button;
