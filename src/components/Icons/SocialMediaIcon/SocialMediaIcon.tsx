import { SocialMediaIconProps } from "./protocol";

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({
  icon,
  handleClick,
}) => {
  return <div onClick={handleClick}>{icon}</div>;
};

export default SocialMediaIcon;
