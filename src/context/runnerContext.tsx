import { createContext } from "react";
import { IFilter, IModal, IRunner, IRunnerList } from "./provider/protocols";

type RunnerContextType = {
  filter: IFilter;
  setFilter: (value: IFilter) => void;
  getRunner: (numeroCorredor: number) => void;
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
