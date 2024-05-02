import { createContext } from "react";
import { IFilter, IModal, IRunner } from "./provider/protocols";

type RunnerContextType = {
  filter: IFilter;
  setFilter: (value: IFilter) => void;
  getRunner: (numeroCorredor: number) => void;
  runner: IRunner;
  runnersList: IRunner[];
  filteredRunnersList: IRunner[];
  isLoading: boolean;
  openModal: IModal;
  handleOpenModal: (type: string, value: boolean) => void;
  errorMessage: string;
};

export const RunnersContext = createContext<RunnerContextType>(
  {} as RunnerContextType
);
