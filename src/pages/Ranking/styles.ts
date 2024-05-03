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
  padding: 1rem;
  gap: 1rem;
`;

export const ListHeaderContainer = styled.div`
  background-color: ${styles.colors.blue["primary+1"]};
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & img {
    width: 102px;
    border-radius: 1rem;
  }
  @media (max-width: 600px) {
    flex-wrap: wrap;
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
  width: 30%;
  align-items: center;
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
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
