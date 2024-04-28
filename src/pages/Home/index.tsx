import Button from "components/Button";
import Footer from "components/Footer";
import InputText from "components/Inputs/InputText";

const Home: React.FC = () => {
  return (
    <div>
      <h2>Preencha as informações abaixo para continuar</h2>
      <InputText
        id='chest-number-input'
        name='idCorrida'
        placeholder='Digite seu número de peito'
      />
      <Button text='Buscar resultados' />
      -ou-
      <Button text='Ver lista completa' />
      <Footer />
    </div>
  );
};

export default Home;
