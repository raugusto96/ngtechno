import { ButtonProps } from "./protocol";

const Button: React.FC<ButtonProps> = ({ text }) => {
  return <button type='button'>{text}</button>;
};

export default Button;
