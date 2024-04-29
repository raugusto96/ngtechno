import { TableHeaderProps } from "./protocol";

const TableHeader: React.FC<TableHeaderProps> = ({ text }) => {
  return <th style={{ textTransform: "uppercase" }}>{text}</th>;
};

export default TableHeader;
