import { TableHeaderProps } from "./protocol";
import { TableHeading } from "./styles";

const TableHeader: React.FC<TableHeaderProps> = ({ text }) => {
  return <TableHeading>{text}</TableHeading>;
};

export default TableHeader;
