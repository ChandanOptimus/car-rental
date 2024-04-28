import { ButtonType } from "./Button.type";
import "./Button.css";
const Button = (props: ButtonType) => {
  const { height, width, children, color, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="button"
      style={{ height: height, width: width, backgroundColor: color }}
    >
      {children}
    </button>
  );
};

export default Button;
