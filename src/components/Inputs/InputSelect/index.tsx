import { InputSelectProps } from "./protocol";
import { Container, SelectContainer } from "./styles";

const InputSelect: React.FC<InputSelectProps> = ({
  name,
  options,
  placeholder,
  handleChange,
}) => {
  return (
    <Container>
      <SelectContainer name={name} id={name} onChange={handleChange}>
        <option value=''>{placeholder}</option>
        {options.map((option: string) => (
          <option value={option}>{option}KM</option>
        ))}
      </SelectContainer>
    </Container>
  );
};

export default InputSelect;
