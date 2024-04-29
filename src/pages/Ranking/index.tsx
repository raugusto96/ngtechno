import Button from "components/Button";
import InputText from "components/Inputs/InputText";
import RunnersList from "components/List/RunnersList";
import { IFilter } from "context/provider/protocols";
import useRunnersContext from "context/runnerContext";
import { useNavigate } from "react-router-dom";

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
    <div>
      <section>
        <h2>Lista completa</h2>
        <h3>Feminino</h3>
        <InputText
          id='search-input'
          placeholder='Pesquisar'
          name='search'
          value={filter.name}
          handleChange={handleChange}
        />
      </section>
      <section>
        <RunnersList />
      </section>
      <section>
        <Button text='Voltar' handleClick={() => navigate(-1)} />
      </section>
    </div>
  );
};

export default Ranking;
