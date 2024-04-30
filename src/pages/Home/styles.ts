import styled from "styled-components";
import styles from "config/styles";

export const Container = styled.div`
  font-family: ${styles.fonts.family.font};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${styles.colors.white.primary};
  @media (max-width: 600px) {
    max-width: 100%;
    padding: 2rem;
  }
`;

export const LogoContainer = styled.div`
  margin: 1rem 0;
  > img {
    max-width: 380px;
    border-radius: 1rem 1rem 0 0;
  }

  @media (max-width: 600px) {
    margin: 0;
    > img {
      max-width: 380px;
      border-radius: 1rem 1rem 0 0;
    }
  }
`;

export const ContentContainer = styled.div`
  @media (min-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0 0 1rem 1rem;
    border: 1px solid ${styles.colors.blue["primary-1"]};
    border-top: none;
    width: calc(28% - 2px);
    margin-top: -1.5rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 600px) {
    width: 100%;
    margin-top: -1rem;
  }
`;

export const Paragraph = styled.p`
  font-weight: ${styles.fonts.weight.medium};
  color: ${styles.colors.blue["primary2"]};
  font-size: ${styles.fonts.size.low};
`;
