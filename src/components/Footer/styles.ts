import styles from "config/styles";
import styled from "styled-components";

export const FooterContainer = styled.div`
  bottom: 0;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  @media (max-width: 600px) {
    margin-top: 0;
    margin-bottom: 1.5rem;
  }
`;

export const FooterHeading = styled.h2`
  color: ${styles.colors.blue["primary-1"]};
  text-align: center;
  font-weight: ${styles.fonts.weight.regular};
  text-transform: uppercase;
  font-size: 14px;
`;
