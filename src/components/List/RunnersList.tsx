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
import assets from "../../config/assets";
import LogoImage from "../../components/Images/Logo/LogoImage";
import { separateCamelCase } from "./../../utils/formatters/text/separateCamelCase";

const RunnersList: React.FC = () => {
  const [runners, setRunners] = useState<IRunnerList[]>([]);

  const { filteredRunnersList, listColumns } = useRunnersContext();

  useEffect(() => {
    setRunners(filteredRunnersList);
  }, [filteredRunnersList]);

  return (
    <TableContainer>
      <TableHeaderContainer>
        <TableRowContainer>
          {listColumns.map((column: string) => (
            <TableHeader text={separateCamelCase(column)} key={column} />
          ))}
        </TableRowContainer>
      </TableHeaderContainer>
      <TableBodyContainer>
        {runners.map((runner: IRunnerList) => (
          <TableRowContainer key={runner.numeroCorredor}>
            <TableData
              data={
                Number(runner.numeroCorredor) > 5 ? (
                  Number(runner.numeroCorredor)
                ) : Number(runner.numeroCorredor) === 1 ? (
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
                ) : Number(runner.numeroCorredor) === 2 ? (
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
                ) : Number(runner.numeroCorredor) === 3 ? (
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
                ) : Number(runner.numeroCorredor) === 4 ? (
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
