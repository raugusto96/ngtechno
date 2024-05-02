export interface IRunner {
  id?: number;
  numero: number;
  nome: string;
  sexo: string;
  tempoBruto: string;
  tempoLiquido: string;
  paceMedio: string;
  tempoEquipe: string;
  classSexo: number;
  classGeral: number;
  classCatTFE: number;
  equipe: string;
  modal: string;
}

export interface IFilter {
  name: string;
}

export interface IModal {
  classificationModal: boolean;
  completeListModal: boolean;
  errorModal: boolean;
}
