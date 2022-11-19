import { BoxModel } from './box.model';

export interface BoxesStateModel {
  isLoading: boolean;
  boxes: BoxModel[];
  error: string | null;
}
