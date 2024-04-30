import styles from "config/styles";
import styled from "styled-components";

export const ButtonContainer = styled.div`
  width: 80%;

  & button {
    background-color: ${styles.colors.blue["primary-1"]};
    padding: 1rem;
    width: 100%;
    color: ${styles.colors.white.primary};
    border: none;
    border-radius: 0.5rem;
    margin: 1rem 0;
    font-size: 14px;
    font-weight: ${styles.fonts.weight.medium};

    &:hover {
      background-color: ${styles.colors.blue["primary0"]};
    }
  }
`;
