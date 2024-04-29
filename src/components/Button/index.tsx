import { ButtonProps } from "./protocol";

const Button: React.FC<ButtonProps> = ({ text, handleClick }) => {
  return (
    <button type='button' onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
