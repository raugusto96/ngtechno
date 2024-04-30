import { LogoImageProps } from "./protocol";

const LogoImage: React.FC<LogoImageProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

export default LogoImage;
