import { BoxModel } from '@app/models/box.model';

export interface BoxesStateModel {
  isLoading: boolean;
  boxes: BoxModel[];
  error: string | null;
}
