export interface IRunner {
  nome: string;
  numero: string;
  sexo: string;
  tempoBruto: string;
  tempoLiquido: string;
  paceMedio: string;
  classSexo: string;
  classGeral: string;
  classCatFE: string;
  equipe: string;
  modal: string;
  dist: string;
  certificado: boolean;
}

export interface IRunnerList {
  colunasCorrida: string[];
  corridaFinalizada: boolean;
  numeroCorredor: string;
  suportaCertificado: boolean;
  valoresCorrida: string[];
}

export interface IFilter {
  name: string;
}

export interface IModal {
  classificationModal: boolean;
  completeListModal: boolean;
  errorModal: boolean;
}

export interface IPublicFilter {
  urlEncoded: string;
  readable: string;
  guidCorrida: string;
}

export type Run = {
  [key: string]: string | undefined;
};
