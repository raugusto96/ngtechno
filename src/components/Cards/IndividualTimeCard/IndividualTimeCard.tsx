import { IndividualTimeCardProps } from "./protocol";
import { Container, SvgContainer, TimeSubTitle, TimeTitle } from "./styles";

const IndividualTimeCard: React.FC<IndividualTimeCardProps> = ({
  time,
  label,
  icon,
}) => {
  return (
    <Container>
      <TimeTitle>{time}</TimeTitle>
      <TimeSubTitle>{label}</TimeSubTitle>
      <SvgContainer>{icon}</SvgContainer>
    </Container>
  );
};

export default IndividualTimeCard;
