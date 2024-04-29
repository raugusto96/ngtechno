export interface InputTextProps {
  placeholder: string;
  name: string;
  id: string;
  value?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
