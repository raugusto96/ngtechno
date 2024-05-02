import styled from "styled-components";

export const TableContainer = styled.table`
  display: block;
  width: 100%;
  border-spacing: 0;
  text-align: center;
  overflow-y: hidden;
  padding: 1rem;

  @media (max-width: 600px) {
    padding: 0;
  }
`;

export const TableHeaderContainer = styled.thead`
  > tr {
    position: sticky;
    left: 0;
    top: 0;
    z-index: 50;
    height: auto;
    display: block;
  }
`;

export const TableRowContainer = styled.tr`
  height: 5rem;

  @media (max-width: 600px) {
    th:first-child,
    td:first-child {
      text-align: left;
      font-weight: 600;
      position: sticky;
      left: 0px;
      z-index: 40;
      background-color: white;
      border-top: none;
      border-right: none;
      border-left: none;
      border-bottom: 1px solid #cacaca;
    }

    th:nth-child(2),
    td:nth-child(2) {
      text-align: left;
      font-weight: 600;
      position: sticky;
      left: 8rem;
      z-index: 40;
      background-color: white;
      border-top: none;
      border-right: 1px solid #cacaca;
      border-left: none;
      border-bottom: 1px solid #cacaca;
    }

    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }
`;

export const TableBodyContainer = styled.tbody`
  display: block;
`;
