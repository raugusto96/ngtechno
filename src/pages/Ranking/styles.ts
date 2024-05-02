import styles from "config/styles";
import styled from "styled-components";

export const Container = styled.div`
  font-family: ${styles.fonts.family.font};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ListHeaderContainer = styled.div`
  background-color: ${styles.colors.blue["primary+1"]};
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  & img {
    width: 102px;
    border-radius: 1rem;
  }
`;

export const ListHeaderDescContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

export const RankingTitle = styled.h2`
  color: white;
  font-size: ${styles.fonts.size.large};
  font-weight: ${styles.fonts.weight.semibold};
`;

export const RankingSubtitle = styled.h2`
  color: white;
  font-size: 20px;
  font-weight: ${styles.fonts.weight.medium};
`;

export const InputContainer = styled.div`
  display: flex;
  padding: 1rem;
  & div {
    position: relative;

    & svg {
      position: absolute;
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
    }

    & input {
      width: 100%;
      border-radius: 0.3rem;
      padding: 1rem 2.3rem;
      &::placeholder {
        color: #b1b1b1;
      }
    }
  }
`;
