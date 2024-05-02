import { IRunner } from "context/provider/protocols";

export interface ClassificationModalProps {
  runner: IRunner;
  handleClose: (type: string, value: boolean) => void;
}
