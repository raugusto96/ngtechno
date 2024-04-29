import { InputTextProps } from "./protocol";

const InputText: React.FC<InputTextProps> = ({
  id,
  name,
  placeholder,
  value,
  handleChange,
}) => {
  return (
    <label htmlFor={id}>
      <input
        type='text'
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </label>
  );
};

export default InputText;
