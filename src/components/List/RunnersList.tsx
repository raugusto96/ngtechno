import { IRunner } from "context/provider/protocols";
import { useEffect, useState } from "react";
import TableHeader from "./Header/TableHeader";
import TableData from "./Data/TableData";
import useRunnersContext from "hooks/useRunnersContext";
import {
  TableBodyContainer,
  TableContainer,
  TableHeaderContainer,
  TableRowContainer,
} from "./styles";
import { tableHeaders } from "./mockData";
import assets from "config/assets";
import LogoImage from "components/Images/Logo/LogoImage";

const RunnersList: React.FC = () => {
  const [runners, setRunners] = useState<IRunner[]>([]);

  const { filteredRunnersList } = useRunnersContext();

  useEffect(() => {
    setRunners(filteredRunnersList);
  }, [filteredRunnersList]);

  return (
    <TableContainer>
      <TableHeaderContainer>
        <TableRowContainer>
          {tableHeaders.map((row: string) => (
            <TableHeader text={row} key={row} />
          ))}
        </TableRowContainer>
      </TableHeaderContainer>
      <TableBodyContainer>
        {runners.map((runner: IRunner) => (
          <TableRowContainer key={runner.id}>
            <TableData
              data={
                runner.numero > 5 ? (
                  runner.numero
                ) : runner.numero === 1 ? (
                  <LogoImage
                    src={
                      assets.svgs.medals.individual.classification.positions
                        .first.icon.src
                    }
                    alt={
                      assets.svgs.medals.individual.classification.positions
                        .first.icon.alt
                    }
                  />
                ) : runner.numero === 2 ? (
                  <LogoImage
                    src={
                      assets.svgs.medals.individual.classification.positions
                        .second.icon.src
                    }
                    alt={
                      assets.svgs.medals.individual.classification.positions
                        .second.icon.alt
                    }
                  />
                ) : runner.numero === 3 ? (
                  <LogoImage
                    src={
                      assets.svgs.medals.individual.classification.positions
                        .third.icon.src
                    }
                    alt={
                      assets.svgs.medals.individual.classification.positions
                        .third.icon.alt
                    }
                  />
                ) : runner.numero === 4 ? (
                  <LogoImage
                    src={
                      assets.svgs.medals.individual.classification.positions
                        .fourth.icon.src
                    }
                    alt={
                      assets.svgs.medals.individual.classification.positions
                        .fourth.icon.alt
                    }
                  />
                ) : (
                  <LogoImage
                    src={
                      assets.svgs.medals.individual.classification.positions
                        .fifth.icon.src
                    }
                    alt={
                      assets.svgs.medals.individual.classification.positions
                        .fifth.icon.alt
                    }
                  />
                )
              }
            />
            <TableData data={runner.nome} />
            <TableData data={runner.sexo} />
            <TableData data={runner.tempoBruto} />
            <TableData data={runner.tempoLiquido} />
            <TableData data={runner.paceMedio} />
            <TableData data={runner.classSexo} />
            <TableData data={runner.classGeral} />
            <TableData data={runner.classCatTFE} />
            <TableData data={runner.equipe} />
            <TableData data={runner.modal} />
          </TableRowContainer>
        ))}
      </TableBodyContainer>
    </TableContainer>
  );
};

export default RunnersList;
