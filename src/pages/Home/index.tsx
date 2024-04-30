import Button from "components/Button";
import Footer from "components/Footer";
import LogoImage from "components/Images/Logo/LogoImage";
import InputText from "components/Inputs/InputText";
import ClassificationModal from "components/Modals/ClassificationModal/ClassificationModal";
import assets from "config/assets";
import useRunnersContext from "hooks/useRunnersContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  ContentContainer,
  LogoContainer,
  Paragraph,
} from "./styles";
import Title from "components/Texts/Headings/Title/Title";

const Home: React.FC = () => {
  const { getRunner, isOpenModal, setIsOpenModal, runner } =
    useRunnersContext();
  const navigate = useNavigate();

  const [runnerNumber, setRunnerNumber] = useState<string>("");

  const handleRunnerNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setRunnerNumber(value);
  };

  return (
    <Container>
      <LogoContainer>
        <LogoImage src={assets.images.logo.src} alt={assets.images.logo.alt} />
      </LogoContainer>
      <ContentContainer>
        <Title>Preencha as informações abaixo para continuar</Title>
        <InputText
          id='chest-number-input'
          name='idCorrida'
          placeholder='Digite seu número de peito'
          value={runnerNumber}
          handleChange={handleRunnerNumber}
        />
        <Button
          text='Buscar resultados'
          handleClick={() => {
            getRunner(Number(runnerNumber));
            setRunnerNumber("");
          }}
        />
        <Paragraph>-ou-</Paragraph>
        <Button
          text='Ver lista completa'
          handleClick={() => navigate("/classificacoes")}
        />
      </ContentContainer>
      <Footer />
      {isOpenModal && (
        <ClassificationModal runner={runner} handleClose={setIsOpenModal} />
      )}
    </Container>
  );
};

export default Home;
