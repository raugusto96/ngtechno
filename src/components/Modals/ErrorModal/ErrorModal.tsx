import Title from "components/Texts/Headings/Title/Title";
import styles from "config/styles";
import { MdWarning } from "react-icons/md";
import { Container, ModalOverlay, Paragraph } from "./styles";
import { ErrorModalProps } from "./protocol";
import Button from "components/Button";
import useRunnersContext from "hooks/useRunnersContext";

const ErrorModal: React.FC<ErrorModalProps> = ({ errorMessage }) => {
  const { handleOpenModal } = useRunnersContext();

  return (
    <ModalOverlay>
      <Container>
        <MdWarning
          size={64}
          color={styles.colors.blue["primary-1"]}
          opacity={0.5}
        />
        <Title>Não foi possível completar sua requisição</Title>
        <Paragraph>{errorMessage}</Paragraph>
        <Button
          text='Ok'
          handleClick={() => handleOpenModal("errorModal", false)}
        />
      </Container>
    </ModalOverlay>
  );
};

export default ErrorModal;
