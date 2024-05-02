import styles from "config/styles";
import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const Container = styled.div`
  display: flex;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  background-color: white;
  width: 30%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    width: 70%;
  }
`;

export const Paragraph = styled.p`
  color: ${styles.colors.blue["primary-1"]};
  font-size: 1.3rem;
  text-align: center;
`;
