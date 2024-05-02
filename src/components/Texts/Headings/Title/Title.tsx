import { TitleContainer, TitleHeading } from "./styles";

const Title: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <TitleContainer>
      <TitleHeading>{children}</TitleHeading>
    </TitleContainer>
  );
};

export default Title;
