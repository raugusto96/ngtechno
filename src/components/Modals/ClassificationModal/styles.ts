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
  width: 40%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  max-height: 80%;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${styles.colors.gray.gray2};
  @media (max-width: 600px) {
    max-height: 100%;

    overflow: hidden;
    width: 80%;
  }
`;

export const HeaderContainer = styled.div`
  padding: 2rem;
  display: flex;
  border-radius: 1rem;
  background-color: white;
  gap: 1rem;
  & img {
    width: 50%;
    border-radius: 1rem;
  }
`;

export const RunnerDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  & h3 {
    color: ${styles.colors.blue["primary-1"]};
    font-size: ${styles.fonts.size.large};
    font-weight: ${styles.fonts.weight.semibold};
  }

  & h4 {
    color: ${styles.colors.blue["primary-1"]};
    font-size: ${styles.fonts.size.medium};
    font-weight: ${styles.fonts.weight.regular};
  }
`;

export const ClassificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin-bottom: 1rem;

  & h2 {
    color: black;
    font-size: ${styles.fonts.size.medium};
    font-weight: ${styles.fonts.weight.medium};
  }
`;

export const ClassificationCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
`;

export const ClassificationTimesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
  margin: 0 auto;
  margin-bottom: 1rem;

  > div {
    width: 100%;
    & button {
      margin: 0.5rem 0;
      width: 100%;
    }
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;
