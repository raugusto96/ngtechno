import { IRunner } from "./protocols";

export const mockRunner: IRunner = {
  id: 1,
  name: "Maria Malachias",
  sex: "F",
  bruteTime: "00:23:21",
  liquidTime: "00:23:21",
  mediaPace: "00:03:21",
  generalClassification: 1,
  sexClassification: 1,
};

export const mockRunnerList: IRunner[] = [
  {
    id: 0,
    name: "Maria Malachias",
    sex: "F",
    bruteTime: "00:23:21",
    liquidTime: "00:23:21",
    mediaPace: "00:03:21",
    generalClassification: 1,
    sexClassification: 1,
  },
  {
    id: 1,
    name: "Maria Malachias",
    sex: "F",
    bruteTime: "00:23:21",
    liquidTime: "00:23:21",
    mediaPace: "00:03:21",
    generalClassification: 2,
    sexClassification: 2,
  },
  {
    id: 2,
    name: "Maria Malachias",
    sex: "F",
    bruteTime: "00:23:21",
    liquidTime: "00:23:21",
    mediaPace: "00:03:21",
    generalClassification: 3,
    sexClassification: 3,
  },
];
