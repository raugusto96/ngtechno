import styled from "styled-components";
import {
  IndividualClassificationCardStyledProps,
  IndividualClassificationParagraphStyledProps,
} from "./protocol";
import styles from "../../../config/styles";

export const Container = styled.div<IndividualClassificationCardStyledProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  position: relative;
  width: 120px;
  height: 100px;

  border-radius: 1rem;

  & img {
    position: absolute;
    width: 37.94px;
    height: 37.94px;
    right: -20px;
    top: 0px;

    transform: rotate(-11.07deg);
  }
`;

export const IndividualClassificationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;
`;

export const ClassTitle = styled.h3`
  font-size: ${styles.fonts.size.large};
  font-weight: ${styles.fonts.weight.semibold};
  color: black;
`;

export const ClassSubTitle = styled.h4<IndividualClassificationParagraphStyledProps>`
  color: ${({ paragraphColor }) => paragraphColor};
  font-size: ${styles.fonts.size.medium};
  font-weight: ${styles.fonts.weight.medium};
`;
