import { BoxModel } from '@app/models/box.model';
import { BoxOpeningModel } from '@app/models/box-opening.model';

export interface BoxStateModel {
  isOpening: boolean;
  box: BoxModel;
  boxOpenings: BoxOpeningModel[];
  error: string | null;
}
