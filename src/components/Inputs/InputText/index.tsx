import { InputTextProps } from "./protocol";
import { InputContainer } from "./styles";

const InputText: React.FC<InputTextProps> = ({
  id,
  name,
  placeholder,
  value,
  handleChange,
  icon,
}) => {
  return (
    <InputContainer>
      <label htmlFor={id}>
        {icon}
        <input
          type='text'
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </label>
    </InputContainer>
  );
};

export default InputText;
