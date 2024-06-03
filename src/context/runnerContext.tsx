import { createContext } from "react";
import { IFilter, IModal, IRunner, IRunnerList } from "./provider/protocols";

type RunnerContextType = {
  filter: IFilter;
  setFilter: (value: IFilter) => void;
  setRunId: (runId: string) => void;
  getRunner: (numeroCorredor: number) => void;
  runnerFormatted: IRunner;
  logoSrc: string;
  isListButtonVisible: boolean;
  listColumns: string[];
  setSelectedCategory: (value: string) => void;
  setCategoriesOptions: (value: any[]) => void;
  setSexesOptions: (value: any[]) => void;
  categoriesOptions: string[];
  selectedCategory: string;
  sexesOptions: string[];
  getCertifiedByRunner: (numeroCorredor: number) => void;
  certifiedUrl: string;
  page: number;
  getRunnersList: (filterValue: string) => void;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  maxPages: number;
  runner: IRunner;
  runnersList: IRunnerList[];
  paginatedRunners: IRunnerList[];
  filteredRunnersList: IRunnerList[];
  openModal: IModal;
  handleOpenModal: (type: string, value: boolean) => void;
  errorMessage: string;
};

export const RunnersContext = createContext<RunnerContextType>(
  {} as RunnerContextType
);
