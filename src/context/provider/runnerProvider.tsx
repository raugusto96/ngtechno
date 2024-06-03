import { RunnersContext } from "../runnerContext";
import { useCallback, useEffect, useMemo, useState } from "react";
import NgtechnoApi from "../../utils/api/ngtechnoApi";
import {
  IFilter,
  IModal,
  IPublicFilter,
  IRunner,
  IRunnerList,
  Run,
} from "./protocols";
import axios from "axios";
import { toCamelCase } from "utils/formatters/text/toCamelCase";

const RunnerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // States
  const [filter, setFilter] = useState<IFilter>({
    name: "",
  });
  const [runner, setRunner] = useState<any>({});
  const [runnerFormatted, setRunnerFormatted] = useState<IRunner>(
    {} as IRunner
  );
  const [runId, setRunId] = useState<string>("");
  const [logoSrc, setLogoSrc] = useState<string>("");
  const [runGuid, setRunGuid] = useState<string>("");
  const [certifiedUrl, setCertifiedUrl] = useState<string>("");
  const [listColumns, setListColumns] = useState<string[]>([]);
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
    setListColumns(["Numero", ...(response?.retorno.colunasCorrida ?? [])]);
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

  const initializeIRunner = (): IRunner => ({
    numero: "",
    nome: "",
    classificacao: "",
    sexo: "",
    tempoChegada: "",
    tempoLiquido: "",
    faixaEtaria: "",
    classFaixaEtaria: "",
    pace: "",
    percurso: "",
    classSexo: "",
  });

  const runnerKeyMap: { [key: string]: keyof IRunner } = {
    numero: "numero",
    nome: "nome",
    classificacao: "classificacao",
    sexo: "sexo",
    tempoChegada: "tempoChegada",
    tempoLiquido: "tempoLiquido",
    faixaEtaria: "faixaEtaria",
    classFaixaEtaria: "classFaixaEtaria",
    pace: "pace",
    percurso: "percurso",
    classSexo: "classSexo",
  };

  const mapToIRunnerKey = (key: string): keyof IRunner | undefined => {
    const camelCaseKey = toCamelCase(key);
    return runnerKeyMap[camelCaseKey];
  };

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

      setRunner(response?.retorno);
      handleOpenModal("classificationModal", true);

      const runnerEntries: [string, string[]][] = Object.entries(
        response?.retorno
      );
      const formattedRunner: Run = initializeIRunner() as unknown as Run;
      const [, , [, keys], [, values]] = runnerEntries;

      keys.forEach((key, index) => {
        const value = values[index];
        if (value) {
          const camelCaseKey = toCamelCase(key);
          const mappedKey = mapToIRunnerKey(key) || camelCaseKey;
          formattedRunner[mappedKey] = value;
        }
      });

      console.log(formattedRunner);
      setRunnerFormatted(formattedRunner as unknown as IRunner);
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
    listColumns,
    runnerFormatted,
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
