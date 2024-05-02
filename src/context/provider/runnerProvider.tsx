import { RunnersContext } from "context/runnerContext";
import { useCallback, useEffect, useState } from "react";
// import NgtechnoApi from "utils/api/ngtechnoApi";
import { IFilter, IModal, IRunner } from "./protocols";
import { mockRunner, mockRunnerList } from "./mockData";

const RunnerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // States
  const [filter, setFilter] = useState<IFilter>({
    name: "",
  });
  const [runner, setRunner] = useState<IRunner>({} as IRunner);
  const [runnersList, setRunnersList] = useState<IRunner[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [filteredRunnersList, setFilteredRunnersList] = useState<IRunner[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<IModal>({
    classificationModal: false,
    completeListModal: false,
    errorModal: false,
  });

  // const ngtechnoApi = new NgtechnoApi();

  // Requisita o corredor
  const getRunner = async (numeroCorredor: number) => {
    try {
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
      handleOpenModal("classificationModal", true);
      setIsLoading((prevState) => !prevState);
    } catch (error: any) {
      setErrorMessage(error.message);
      handleOpenModal("errorModal", true);
    }
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
    setFilteredRunnersList(mockRunnerList);
    setIsLoading((prevState) => !prevState);
  };

  const filterRunnerList = useCallback(
    (name: string) => {
      if (name.trim() === "") {
        setFilteredRunnersList(runnersList);
      } else {
        const filteredRunnerList = runnersList.filter((runner) =>
          runner.name.toLowerCase().includes(name.toLowerCase())
        );
        setFilteredRunnersList(filteredRunnerList);
      }
    },
    [runnersList]
  );

  const handleOpenModal = (type: string, value: boolean) => {
    setOpenModal((prevState) => ({
      ...prevState,
      [type]: value,
    }));
  };

  useEffect(() => {
    getRunnersList(1);
  }, []);

  useEffect(() => {
    filterRunnerList(filter.name);
  }, [filter, filterRunnerList]);

  const initialValue = {
    filter,
    setFilter,
    getRunner,
    runner,
    runnersList,
    filteredRunnersList,
    isLoading,
    openModal,
    handleOpenModal,
    errorMessage,
  };

  return (
    <RunnersContext.Provider value={initialValue}>
      {children}
    </RunnersContext.Provider>
  );
};

export default RunnerProvider;
