export interface IRunner {
  id?: number;
  name: string;
  sex: string;
  bruteTime: string;
  liquidTime: string;
  mediaPace: string;
  teamTime: string;
  sexClassification: number;
  generalClassification: number;
  teamClassification: number;
}

export interface IFilter {
  name: string;
}

export interface IModal {
  classificationModal: boolean;
  completeListModal: boolean;
  errorModal: boolean;
}
