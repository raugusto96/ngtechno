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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  // const ngtechnoApi = new NgtechnoApi();

  // Requisita o corredor
  const getRunner = async (numeroCorredor: number) => {
    setIsLoading((prevState) => !prevState);
    console.log(numeroCorredor);
    // const response = await ngtechnoApi.request({
    //   url: "/obterTempoCorredor",
    //   body: {
    //     idCorrida,
    //     numeroCorredor,
    //   },
    // });
    // console.log(response);
    setRunner(mockRunner);
    setIsOpenModal(true);
    setIsLoading((prevState) => !prevState);
  };

  // Requisita a lista de corredores
  const getRunnersList = async (idCorrida: number) => {
    setIsLoading((prevState) => !prevState);
    console.log(idCorrida);
    // const response = await ngtechnoApi.request({
    //   url: "/obterTempoCorredor",
    //   body: {
    //     idCorrida,
    //   },
    // });
    // console.log(response);
    setRunnersList(mockRunnerList);
    setIsLoading((prevState) => !prevState);
  };

  useEffect(() => {
    getRunnersList(1);
  }, []);

  const initialValue = {
    getRunner,
    runner,
    runnersList,
    isLoading,
    isOpenModal,
    setIsOpenModal,
  };

  return (
    <RunnersContext.Provider value={initialValue}>
      {children}
    </RunnersContext.Provider>
  );
};

export default RunnerProvider;
