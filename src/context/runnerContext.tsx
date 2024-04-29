import { createContext, useContext } from "react";
import { IFilter, IRunner } from "./provider/protocols";

type RunnerContextType = {
  filter: IFilter;
  setFilter: (value: IFilter) => void;
  getRunner: (numeroCorredor: number) => void;
  runner: IRunner;
  runnersList: IRunner[];
  filteredRunnersList: IRunner[];
  isLoading: boolean;
  isOpenModal: boolean;
  setIsOpenModal: (value: boolean) => void;
};

export const RunnersContext = createContext<RunnerContextType>(
  {} as RunnerContextType
);

const useRunnersContext = () => useContext(RunnersContext);

export default useRunnersContext;
