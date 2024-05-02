import styles from "config/styles";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Paragraph = styled.p`
  color: ${styles.colors.blue["primary-1"]};
  font-size: 1.3rem;
  text-align: center;
`;
