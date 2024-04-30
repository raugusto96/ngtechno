import styles from "config/styles";
import styled from "styled-components";

export const TitleContainer = styled.div`
  text-align: center;
  padding: 0.5rem;
  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

export const TitleHeading = styled.h2`
  margin: 0.5rem 0;
  color: ${styles.colors.blue["primary-1"]};
  font-size: ${styles.fonts.size.large};
`;
