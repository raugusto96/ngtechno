import { ButtonProps } from "./protocol";
import { ButtonContainer } from "./styles";

const Button: React.FC<ButtonProps> = ({ text, handleClick }) => {
  return (
    <ButtonContainer>
      <button type='button' onClick={handleClick}>
        {text}
      </button>
    </ButtonContainer>
  );
};

export default Button;
