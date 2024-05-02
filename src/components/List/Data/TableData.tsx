import { TableDataProps } from "./protocol";
import { TableDataContainer } from "./styles";

const TableData: React.FC<TableDataProps> = ({ data }) => {
  return <TableDataContainer>{data}</TableDataContainer>;
};

export default TableData;
