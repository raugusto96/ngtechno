import { InputTextProps } from "./protocol";

const InputText: React.FC<InputTextProps> = ({ id, name, placeholder }) => {
  return (
    <label htmlFor={id}>
      <input type='text' name={name} id={id} placeholder={placeholder} />
    </label>
  );
};

export default InputText;
