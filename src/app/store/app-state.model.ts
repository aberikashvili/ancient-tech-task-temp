import { BoxStateModel } from './box/box-state.model';
import { BoxesStateModel } from './boxes/boxes-state.model';
import { UserStateModel } from './user/user-state.model';

export interface IAppStateModel {
  boxes: BoxesStateModel;
  box: BoxStateModel;
  user: UserStateModel;
}
