import { TableDataProps } from "./protocol";

const TableData: React.FC<TableDataProps> = ({ data }) => {
  return <td>{data}</td>;
};

export default TableData;
