import Title from "../../../components/Texts/Headings/Title/Title";
import {
  ButtonContainer,
  Container,
  ModalOverlay,
  Paragraph,
  SvgContainer,
} from "./styles";
import assets from "../../../config/assets";
import Button from "../../../components/Button";
import { MdFemale } from "react-icons/md";
import { MdMale } from "react-icons/md";
import useRunnersContext from "../../../hooks/useRunnersContext";
import { useNavigate } from "react-router-dom";
import InputSelect from "components/Inputs/InputSelect";

const CompleteListModal: React.FC = () => {
  const {
    handleOpenModal,
    getRunnersList,
    logoSrc,
    categoriesOptions,
    selectedCategory,
    setSelectedCategory,
    sexesOptions,
  } = useRunnersContext();
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <ModalOverlay>
      <Container>
        <Title>Lista Completa</Title>
        <Paragraph>Selecione o grupo que deseja visualizar a lista</Paragraph>
        <SvgContainer>
          <img src={logoSrc} alt={assets.svgs.list.icon.alt} />
        </SvgContainer>
        <Paragraph>Selecione a categoria da corrida</Paragraph>

        <InputSelect
          handleChange={handleChange}
          name='run-category'
          placeholder='Selecione a categoria'
          options={categoriesOptions}
        />
        <ButtonContainer>
          {selectedCategory &&
            sexesOptions.map((option: string) => (
              <Button
                text={option === "F" ? "Feminino" : "Masculino"}
                icon={
                  option === "F" ? (
                    <MdFemale size='20px' opacity='0.5' />
                  ) : (
                    <MdMale size='20px' opacity='0.5' />
                  )
                }
                handleClick={() => {
                  getRunnersList(`${option}${selectedCategory}`);
                  navigate("/classificacoes");
                }}
              />
            ))}
          {/* <Button
            text='Feminino'
            icon={}
            handleClick={() => {
              getRunnersList("F6");
              navigate("/classificacoes");
            }}
          />
          <Button
            text='Masculino'
            handleClick={() => {
              getRunnersList("M6");
              navigate("/classificacoes");
            }}
            icon={<MdMale size='20px' opacity='0.5' />}
          /> */}
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
