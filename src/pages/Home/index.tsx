import Button from "components/Button";
import Footer from "components/Footer";
import InputText from "components/Inputs/InputText";
import ClassificationModal from "components/Modals/ClassificationModal/ClassificationModal";
import useRunnersContext from "hooks/useRunnersContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h2>Preencha as informações abaixo para continuar</h2>
      <form></form>
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
      -ou-
      <Button
        text='Ver lista completa'
        handleClick={() => navigate("/classificacoes")}
      />
      <Footer />
      {isOpenModal && (
        <ClassificationModal runner={runner} handleClose={setIsOpenModal} />
      )}
    </div>
  );
};

export default Home;
