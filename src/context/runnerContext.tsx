import { createContext } from "react";
import { IRunner } from "./provider/protocols";

type RunnerContextType = {
  getRunner: (numeroCorredor: number) => void;
  runner: IRunner;
  runnersList: IRunner[];
  isLoading: boolean;
  isOpenModal: boolean;
  setIsOpenModal: (value: boolean) => void;
};

export const RunnersContext = createContext<RunnerContextType | null>(null);
