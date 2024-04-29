import { IRunner } from "context/provider/protocols";

export interface ClassificationModalProps {
  runner: IRunner;
  handleClose: (value: boolean) => void;
}
