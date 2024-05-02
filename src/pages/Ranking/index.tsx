import Button from "components/Button";
import InputText from "components/Inputs/InputText";
import RunnersList from "components/List/RunnersList";
import { IFilter } from "context/provider/protocols";
import useRunnersContext from "hooks/useRunnersContext";
import { useNavigate } from "react-router-dom";
import { MdOutlineSearch } from "react-icons/md";
import {
  Container,
  HeaderContainer,
  InputContainer,
  ListHeaderContainer,
  ListHeaderDescContainer,
  RankingSubtitle,
  RankingTitle,
} from "./styles";
import LogoImage from "components/Images/Logo/LogoImage";
import assets from "config/assets";

const Ranking: React.FC = () => {
  const navigate = useNavigate();
  const { setFilter, filter } = useRunnersContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilter((prevState: IFilter) => ({
      ...prevState,
      name: value,
    }));
  };

  return (
    <Container>
      <ListHeaderContainer>
        <HeaderContainer>
          <LogoImage
            src={assets.images.logo.src}
            alt={assets.images.logo.alt}
          />
          <ListHeaderDescContainer>
            <RankingTitle>Lista completa</RankingTitle>
            <RankingSubtitle>Feminino</RankingSubtitle>
          </ListHeaderDescContainer>
        </HeaderContainer>
        <InputContainer>
          <InputText
            id='search-input'
            placeholder='Pesquisar'
            name='search'
            value={filter.name}
            handleChange={handleChange}
            icon={<MdOutlineSearch size={14} color='#B1B1B1' />}
          />
        </InputContainer>
      </ListHeaderContainer>
      <section>
        <RunnersList />
      </section>
      <section>
        <Button text='Voltar' handleClick={() => navigate(-1)} />
      </section>
    </Container>
  );
};

export default Ranking;
