import Button from "components/Button";
import Footer from "components/Footer";
import InputText from "components/Inputs/InputText";
import ClassificationModal from "components/Modals/ClassificationModal/ClassificationModal";
import { RunnersContext } from "context/runnerContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const context = useContext(RunnersContext);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Preencha as informações abaixo para continuar</h2>
      <InputText
        id='chest-number-input'
        name='idCorrida'
        placeholder='Digite seu número de peito'
      />
      <Button
        text='Buscar resultados'
        handleClick={() => {
          context?.getRunner(699);
        }}
      />
      -ou-
      <Button
        text='Ver lista completa'
        handleClick={() => navigate("/classificacoes")}
      />
      <Footer />
      {context?.isOpenModal && (
        <ClassificationModal
          runner={context?.runner}
          handleClose={context?.setIsOpenModal}
        />
      )}
    </div>
  );
};

export default Home;
