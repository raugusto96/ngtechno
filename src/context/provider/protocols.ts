export interface IRunner {
  numero: string;
  nome: string;
  classificacao: string;
  sexo: string;
  tempoChegada: string;
  tempoLiquido: string;
  faixaEtaria: string;
  classFaixaEtaria: string;
  pace: string;
  percurso: string;
  equipe?: string;
  classSexo?: string;
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
