import { RunnersContext } from "context/runnerContext";
import { useCallback, useEffect, useState } from "react";
import NgtechnoApi from "utils/api/ngtechnoApi";
import { IFilter, IModal, IRunner, IRunnerList } from "./protocols";

const RunnerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // States
  const [filter, setFilter] = useState<IFilter>({
    name: "",
  });
  const [runner, setRunner] = useState<IRunner>({} as IRunner);
  const [runnersList, setRunnersList] = useState<IRunnerList[]>([]);
  const [page, setPage] = useState<string>("1");
  const [paginatedRunners, setPaginatedRunners] = useState<IRunnerList[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [filteredRunnersList, setFilteredRunnersList] = useState<IRunnerList[]>(
    []
  );
  const [openModal, setOpenModal] = useState<IModal>({
    classificationModal: false,
    completeListModal: false,
    errorModal: false,
  });

  const ngtechnoApi = new NgtechnoApi();

  // Requisita o corredor
  const getRunner = async (numeroCorredor: number) => {
    try {
      if (!numeroCorredor) {
        throw new Error("Por favor, preencha o campo com o número do peito.");
      }
      const response = await ngtechnoApi.request({
        url: "/obterTempoCorredor",
        body: {
          idCorrida: "ROSA",
          numeroCorredor,
        },
      });
      const formatedRunner = {
        nome: response?.retorno.valoresCorrida[0],
        numero: response?.retorno.numeroCorredor,
        sexo: response?.retorno.valoresCorrida[1],
        tempoBruto: response?.retorno.valoresCorrida[2],
        tempoLiquido: response?.retorno.valoresCorrida[3],
        paceMedio: response?.retorno.valoresCorrida[4],
        classSexo: response?.retorno.valoresCorrida[5],
        classGeral: response?.retorno.valoresCorrida[6],
        classCatFE: response?.retorno.valoresCorrida[7],
        equipe: response?.retorno.valoresCorrida[8],
        modal: response?.retorno.valoresCorrida[9],
        dist: response?.retorno.valoresCorrida[10],
        certificado: response?.retorno.suportaCertificado,
      };
      console.log(formatedRunner);
      setRunner(formatedRunner);
      handleOpenModal("classificationModal", true);
    } catch (error: any) {
      setErrorMessage(error.message);
      handleOpenModal("errorModal", true);
    }
  };

  // Requisita a lista de corredores
  const getRunnersList = async (filterValue: string) => {
    const response = await ngtechnoApi.request({
      url: "/ListarTemposCorridaPorFiltro",
      body: {
        guidCorrida: "7541a776-75d0-4c97-b47d-b0c700db7e08",
        valorFiltroUrlEncoded: filterValue,
      },
    });
    setRunnersList(response?.retorno);
    setFilteredRunnersList(response?.retorno);
  };

  const paginateResults = (
    list: IRunnerList[],
    pageSize: number,
    pageNumber: number
  ) => {
    --pageNumber; // Ajuste para usar 0-based index
    const initial = pageNumber * pageSize;
    const maxResults = pageNumber * pageSize + pageSize;
    const paginatedList = list.slice(initial, maxResults);
    setPaginatedRunners(paginatedList);
  };

  const filterRunnerList = useCallback(
    (name: string) => {
      if (name.trim() === "") {
        setFilteredRunnersList(paginatedRunners);
      } else {
        const filteredRunnerList = paginatedRunners.filter((runner) =>
          runner.valoresCorrida[0].toLowerCase().includes(name.toLowerCase())
        );
        setFilteredRunnersList(filteredRunnerList);
      }
    },
    [paginatedRunners]
  );

  const handleOpenModal = useCallback((type: string, value: boolean) => {
    setOpenModal((prevState) => ({
      ...prevState,
      [type]: value,
    }));
  }, []);

  useEffect(() => {
    filterRunnerList(filter.name);
  }, [filter, filterRunnerList]);

  useEffect(() => {
    paginateResults(runnersList, 10, Number(page));
  }, [runnersList, page]);

  const initialValue = {
    filter,
    setFilter,
    getRunner,
    getRunnersList,
    runner,
    runnersList,
    paginatedRunners,
    filteredRunnersList,
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
