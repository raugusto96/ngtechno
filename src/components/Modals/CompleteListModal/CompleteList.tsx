import Title from "components/Texts/Headings/Title/Title";
import {
  ButtonContainer,
  Container,
  ModalOverlay,
  Paragraph,
  SvgContainer,
} from "./styles";
import assets from "config/assets";
import Button from "components/Button";
import { MdFemale } from "react-icons/md";
import { MdMale } from "react-icons/md";
import useRunnersContext from "hooks/useRunnersContext";

const CompleteListModal: React.FC = () => {
  const { handleOpenModal } = useRunnersContext();

  return (
    <ModalOverlay>
      <Container>
        <Title>Lista Completa</Title>
        <Paragraph>Selecione o grupo que deseja visualizar a lista</Paragraph>
        <SvgContainer>
          <img
            src={assets.svgs.list.icon.src}
            alt={assets.svgs.list.icon.alt}
          />
        </SvgContainer>
        <ButtonContainer>
          <Button
            text='Feminino'
            icon={<MdFemale size='20px' opacity='0.5' />}
          />
          <Button
            text='Masculino'
            icon={<MdMale size='20px' opacity='0.5' />}
          />
        </ButtonContainer>
        <Button
          text='Voltar'
          handleClick={() => handleOpenModal("completeListModal", false)}
        />
      </Container>
    </ModalOverlay>
  );
};

export default CompleteListModal;
