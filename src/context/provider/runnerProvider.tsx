import { RunnersContext } from "../runnerContext";
import { useCallback, useEffect, useMemo, useState } from "react";
import NgtechnoApi from "../../utils/api/ngtechnoApi";
import {
  IFilter,
  IModal,
  IPublicFilter,
  IRunner,
  IRunnerList,
} from "./protocols";
import axios from "axios";

const RunnerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // States
  const [filter, setFilter] = useState<IFilter>({
    name: "",
  });
  const [runner, setRunner] = useState<IRunner>({} as IRunner);
  const [runId, setRunId] = useState<string>("");
  const [logoSrc, setLogoSrc] = useState<string>("");
  const [runGuid, setRunGuid] = useState<string>("");
  const [certifiedUrl, setCertifiedUrl] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [categoriesOptions, setCategoriesOptions] = useState<string[]>([]);
  const [sexesOptions, setSexesOptions] = useState<string[]>([]);
  const [isListButtonVisible, setIsListButtonVisible] =
    useState<boolean>(false);
  const [runnersList, setRunnersList] = useState<IRunnerList[]>([]);
  const [page, setPage] = useState<number>(1);
  const [maxPages, setMaxPages] = useState<number>(1);
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

  const ngtechnoApi = useMemo(() => new NgtechnoApi(), []);

  const getRunLogo = useCallback(async () => {
    const { data } = await axios.get(
      `https://cloudng.azurewebsites.net/home/ObterLogoCorrida?idCorrida=${runId}`,
      {
        responseType: "blob",
        headers: {
          Accept: "image/png",
        },
      }
    );
    const logoUrl = URL.createObjectURL(data);
    setLogoSrc(logoUrl);
  }, [runId]);

  const getRunById = useCallback(async () => {
    const response = await ngtechnoApi.request({
      url: "/ObterCorridaPorIdCorrida",
      body: {
        idCorrida: runId,
      },
    });
    setRunGuid(response?.retorno?.guidCorrida);
    setIsListButtonVisible(response?.retorno.suportaFiltroPublico);
  }, [ngtechnoApi, runId]);

  const getListPossibleValues = useCallback(async () => {
    const response = await ngtechnoApi.request({
      url: "/ListarValoresPossiveisFiltroPublico",
      body: {
        guidCorrida: runGuid,
      },
    });
    setCategoriesOptions(
      Array.from(
        new Set(
          response?.retorno
            .filter((filter: IPublicFilter) => filter.readable !== "Sexo")
            .map((option: IPublicFilter) => option.readable.slice(1))
            .sort((a: any, b: any) => a - b)
        )
      )
    );
    setSexesOptions(
      selectedCategory
        ? Array.from(
            new Set(
              response?.retorno
                .filter((filter: IPublicFilter) => filter.readable !== "Sexo")
                .filter(
                  (option: IPublicFilter) =>
                    option.readable.slice(1) === selectedCategory
                )
                .map((option: any) => option.readable[0])
            )
          )
        : []
    );
  }, [ngtechnoApi, runGuid, selectedCategory]);

  const getCertifiedByRunner = useCallback(
    async (numeroCorredor: number) => {
      const { data } = await axios.get(
        `https://cloudng.azurewebsites.net/home/ObterCertificadoCorredor?idCorrida=${runId}&numeroCorredor=${numeroCorredor}`,
        {
          responseType: "blob",
          headers: {
            Accept: "image/png",
          },
        }
      );
      setCertifiedUrl(URL.createObjectURL(data));
    },
    [runId]
  );

  // Requisita o corredor
  const getRunner = async (numeroCorredor: number) => {
    try {
      if (!numeroCorredor) {
        throw new Error("Por favor, preencha o campo com o número do peito.");
      }
      const response = await ngtechnoApi.request({
        url: "/obterTempoCorredor",
        body: {
          idCorrida: runId,
          numeroCorredor,
        },
      });
      if (!response?.sucesso) throw new Error(response?.mensagem);
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
      setRunner(formatedRunner);
      handleOpenModal("classificationModal", true);
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.message);
      handleOpenModal("errorModal", true);
    }
  };

  // Requisita a lista de corredores
  const getRunnersList = async (filterValue: string) => {
    const response = await ngtechnoApi.request({
      url: "/ListarTemposCorridaPorFiltro",
      body: {
        guidCorrida: runGuid,
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
    setMaxPages(Math.ceil(list.length / pageSize));
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
    getRunLogo();
    getRunById();
    getListPossibleValues();
  }, [getListPossibleValues, getRunById, getRunLogo, runId]);

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
    logoSrc,
    setRunId,
    sexesOptions,
    getRunnersList,
    setCategoriesOptions,
    isListButtonVisible,
    setSelectedCategory,
    selectedCategory,
    setSexesOptions,
    categoriesOptions,
    getCertifiedByRunner,
    certifiedUrl,
    runner,
    runnersList,
    paginatedRunners,
    filteredRunnersList,
    openModal,
    page,
    setPage,
    maxPages,
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
