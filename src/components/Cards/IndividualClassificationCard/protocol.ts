export interface IndividualClassificationCardProps {
  classification: number;
  category: string;
  categoryRange?: string;
  isPersonalBest: boolean;
  backgroundColor?: string;
  paragraphColor?: string;
}

export interface IndividualClassificationCardStyledProps {
  backgroundColor?: string;
}

export interface IndividualClassificationParagraphStyledProps {
  paragraphColor?: string;
}
