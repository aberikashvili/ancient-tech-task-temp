import { BoxStateModel } from './box/box-state.model';
import { BoxesStateModel } from './boxes/boxes-state.model';

export interface IAppStateModel {
  boxes: BoxesStateModel;
  box: BoxStateModel;
}
