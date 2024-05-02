import { ButtonProps } from "./protocol";
import { ButtonContainer } from "./styles";

const Button: React.FC<ButtonProps> = ({ text, handleClick, icon }) => {
  return (
    <ButtonContainer>
      <button type='button' onClick={handleClick}>
        {icon}
        {text}
      </button>
    </ButtonContainer>
  );
};

export default Button;
