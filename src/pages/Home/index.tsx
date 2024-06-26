import Button from "../../components/Button";
import Footer from "../../components/Footer";
import LogoImage from "../../components/Images/Logo/LogoImage";
import InputText from "../../components/Inputs/InputText";
import ClassificationModal from "../../components/Modals/ClassificationModal/ClassificationModal";
import assets from "../../config/assets";
import useRunnersContext from "../../hooks/useRunnersContext";
import { useEffect, useState } from "react";
import {
  Container,
  ContentContainer,
  LogoContainer,
  Paragraph,
} from "./styles";
import Title from "../../components/Texts/Headings/Title/Title";
import CompleteListModal from "../../components/Modals/CompleteListModal/CompleteList";
import ErrorModal from "../../components/Modals/ErrorModal/ErrorModal";
import { useSearchParams } from "react-router-dom";

const Home: React.FC = () => {
  const {
    getRunner,
    openModal,
    runner,
    handleOpenModal,
    logoSrc,
    errorMessage,
    setRunId,
    isListButtonVisible,
    setSelectedCategory,
    setSexesOptions,
  } = useRunnersContext();

  const [runnerNumber, setRunnerNumber] = useState<string>("");

  const [searchParams] = useSearchParams();

  const handleRunnerNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setRunnerNumber(value);
  };

  useEffect(() => {
    const runId = searchParams.get("idCorrida");
    if (runId) setRunId(runId);
  }, []);

  useEffect(() => {
    return () => {
      handleOpenModal("completeListModal", false);
      setSelectedCategory("");
      setSexesOptions([]);
    };
  }, []);

  return (
    <Container>
      <LogoContainer>
        <LogoImage src={logoSrc} alt={assets.images.logo.alt} />
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
        {isListButtonVisible && (
          <>
            <Paragraph>-ou-</Paragraph>
            <Button
              text='Ver lista completa'
              handleClick={() => handleOpenModal("completeListModal", true)}
            />
          </>
        )}
      </ContentContainer>
      <Footer />
      {openModal.classificationModal && (
        <ClassificationModal runner={runner} handleClose={handleOpenModal} />
      )}
      {openModal.completeListModal && <CompleteListModal />}
      {openModal.errorModal && <ErrorModal errorMessage={errorMessage} />}
    </Container>
  );
};

export default Home;
