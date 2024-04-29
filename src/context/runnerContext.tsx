import { createContext } from "react";
import { IRunner } from "./provider/protocols";

type RunnerContextType = {
  runner: IRunner;
  runnersList: IRunner[];
  isLoading: boolean;
};

export const RunnersContext = createContext<RunnerContextType | null>(null);
