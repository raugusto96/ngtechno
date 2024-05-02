import { SocialMediaIconProps } from "./protocol";
import { Container } from "./styles";

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({
  icon,
  handleClick,
}) => {
  return <Container onClick={handleClick}>{icon}</Container>;
};

export default SocialMediaIcon;
