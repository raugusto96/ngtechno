import { IRunner } from "context/provider/protocols";
import { RunnersContext } from "context/runnerContext";
import { useContext, useEffect, useState } from "react";
import TableHeader from "./Header/TableHeader";
import TableData from "./Data/TableData";

const RunnersList: React.FC = () => {
  const [runners, setRunners] = useState<IRunner[]>([]);

  const context = useContext(RunnersContext);

  useEffect(() => {
    if (context) {
      setRunners(context.runnersList);
    }
  }, [context]);

  return (
    <table>
      <thead>
        <tr>
          <TableHeader text='número' />
          <TableHeader text='nome' />
          <TableHeader text='sexo' />
          <TableHeader text='tempo bruto' />
          <TableHeader text='tempo líquido' />
          <TableHeader text='pace médio' />
          <TableHeader text='class. sexo' />
          <TableHeader text='class. geral' />
          <TableHeader text='class. equipe' />
        </tr>
      </thead>
      <tbody>
        {runners.map((runner: IRunner) => (
          <tr key={runner.id}>
            <TableData data={runner.sexClassification} />
            <TableData data={runner.name} />
            <TableData data={runner.sex} />
            <TableData data={runner.bruteTime} />
            <TableData data={runner.liquidTime} />
            <TableData data={runner.mediaPace} />
            <TableData data={runner.sexClassification} />
            <TableData data={runner.generalClassification} />
            <TableData data={runner.teamClassification} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RunnersList;
