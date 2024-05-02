import styles from "config/styles";
import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  display: flex;
  padding: 1rem;
  width: 95%;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
`;

export const TimeTitle = styled.h3`
  color: black;
  font-size: 20px;
  font-weight: 500;
`;

export const TimeSubTitle = styled.h4`
  color: ${styles.colors.blue["primary-1"]};
  font-size: ${styles.fonts.size.low};
  font-weight: ${styles.fonts.weight.regular};
`;

export const SvgContainer = styled.div`
  & img {
    width: 54px;
    height: 54px;
  }
`;
