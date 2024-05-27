import LogoImage from "../../../components/Images/Logo/LogoImage";
import { IndividualClassificationCardProps } from "./protocol";
import {
  ClassSubTitle,
  ClassTitle,
  Container,
  IndividualClassificationContainer,
} from "./styles";
import assets from "../../../config/assets";

const IndividualClassificationCard: React.FC<
  IndividualClassificationCardProps
> = ({
  classification,
  category,
  isPersonalBest,
  backgroundColor,
  paragraphColor,
}) => {
  return (
    <Container backgroundColor={backgroundColor}>
      {isPersonalBest && (
        <LogoImage
          src={assets.svgs.medals.individual.classification.icon.src}
          alt={assets.svgs.medals.individual.classification.icon.alt}
        />
      )}
      <IndividualClassificationContainer>
        <ClassTitle>{classification ? classification : 0}</ClassTitle>
        <ClassSubTitle paragraphColor={paragraphColor}>
          {category}
        </ClassSubTitle>
      </IndividualClassificationContainer>
    </Container>
  );
};

export default IndividualClassificationCard;
