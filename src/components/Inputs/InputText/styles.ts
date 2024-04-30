import styles from "config/styles";
import styled from "styled-components";

export const InputContainer = styled.div`
  width: 80%;
  & input {
    border: none;
    padding: 1rem;
    width: 100%;
    background-color: ${styles.colors.gray.gray2};
    margin: 0.5rem 0;
    font-size: 12px;
    color: ${styles.colors.gray.gray1};
  }

  @media (max-width: 600px) {
    & input {
      margin: 1rem 0;
    }
  }
`;
