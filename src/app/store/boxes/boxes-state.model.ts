import { BoxModel } from '../../models/box.model';

export interface BoxesStateModel {
  isLoading: boolean;
  boxes: BoxModel[];
  error: string | null;
}
