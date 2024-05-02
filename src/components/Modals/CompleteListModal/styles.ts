import styles from "config/styles";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 30%;
  @media (max-width: 600px) {
    width: 70%;
  }
`;

export const Paragraph = styled.p`
  color: ${styles.colors.blue["primary-1"]};
  font-size: 1.5rem;
  text-align: center;
`;

export const SvgContainer = styled.div`
  width: 180px;
  height: 180px;

  > img {
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  & button {
    width: 80%;
    height: 100%;
  }
`;
