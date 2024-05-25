import styles from "../../../config/styles";
import styled from "styled-components";
import { PaginateNumberProps } from "./protocol";

export const Container = styled.div`
  display: flex;
`;

export const PaginateContainer = styled.ul`
  margin: 1rem 0;
  list-style-type: none;
  padding: 0;
`;

export const PaginateNumber = styled.li<PaginateNumberProps>`
  display: inline-block;
  margin-right: 1rem;
  padding: 1rem;
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  text-align: center;
  background-color: ${({ active }) =>
    active ? styles.colors.blue["primary-1"] : "white"};
  border-radius: 50%;
`;
