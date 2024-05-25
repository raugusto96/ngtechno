import { IRunnerList } from "../../context/provider/protocols";
import React, { useEffect, useState } from "react";
import TableHeader from "./Header/TableHeader";
import TableData from "./Data/TableData";
import useRunnersContext from "../../hooks/useRunnersContext";
import {
  TableBodyContainer,
  TableContainer,
  TableHeaderContainer,
  TableRowContainer,
} from "./styles";
import { tableHeaders } from "./mockData";
import assets from "../../config/assets";
import LogoImage from "../../components/Images/Logo/LogoImage";

const RunnersList: React.FC = () => {
  const [runners, setRunners] = useState<IRunnerList[]>([]);

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
        {runners.map((runner: IRunnerList) => (
          <TableRowContainer key={runner.numeroCorredor}>
            <TableData
              data={
                Number(runner.valoresCorrida[5]) > 5 ? (
                  Number(runner.valoresCorrida[5])
                ) : Number(runner.valoresCorrida[5]) === 1 ? (
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
                ) : Number(runner.valoresCorrida[5]) === 2 ? (
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
                ) : Number(runner.valoresCorrida[5]) === 3 ? (
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
                ) : Number(runner.valoresCorrida[5]) === 4 ? (
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
            {runner.valoresCorrida.map((value: string, index: number) => (
              <React.Fragment key={index}>
                <TableData data={value === "" ? "-" : value} />
              </React.Fragment>
            ))}
          </TableRowContainer>
        ))}
      </TableBodyContainer>
    </TableContainer>
  );
};

export default RunnersList;
