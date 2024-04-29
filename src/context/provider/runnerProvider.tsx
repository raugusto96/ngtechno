import { RunnersContext } from "context/runnerContext";
import { useEffect, useState } from "react";
// import NgtechnoApi from "utils/api/ngtechnoApi";
import { IRunner } from "./protocols";
import { mockRunner, mockRunnerList } from "./mockData";

const RunnerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // States
  const [runner, setRunner] = useState<IRunner>({} as IRunner);
  const [runnersList, setRunnersList] = useState<IRunner[]>([]);

  // const ngtechnoApi = new NgtechnoApi();

  // Requisita o corredor
  const getRunner = async ({
    idCorrida,
    numeroCorredor,
  }: {
    idCorrida: number;
    numeroCorredor: number;
  }) => {
    console.log({ idCorrida, numeroCorredor });
    // const response = await ngtechnoApi.request({
    //   url: "/obterTempoCorredor",
    //   body: {
    //     idCorrida,
    //     numeroCorredor,
    //   },
    // });
    // console.log(response);
    setRunner(mockRunner);
  };

  // Requisita a lista de corredores
  const getRunnersList = async (idCorrida: number) => {
    console.log(idCorrida);
    // const response = await ngtechnoApi.request({
    //   url: "/obterTempoCorredor",
    //   body: {
    //     idCorrida,
    //   },
    // });
    // console.log(response);
    setRunnersList(mockRunnerList);
  };

  useEffect(() => {
    getRunner({ idCorrida: 1, numeroCorredor: 1 });
    getRunnersList(1);
  }, []);

  const initialValue = {
    runner,
    runnersList,
  };

  return (
    <RunnersContext.Provider value={initialValue}>
      {children}
    </RunnersContext.Provider>
  );
};

export default RunnerProvider;
