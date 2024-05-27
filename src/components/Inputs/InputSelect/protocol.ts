export interface InputSelectProps {
  name: string;
  options: string[];
  placeholder: string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
