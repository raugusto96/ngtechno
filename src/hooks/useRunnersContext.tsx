import { RunnersContext } from "../context/runnerContext";
import { useContext } from "react";

const useRunnersContext = () => useContext(RunnersContext);

export default useRunnersContext;
