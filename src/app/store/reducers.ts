import { boxesReducer } from './boxes/boxes.reducer';
import { boxReducer } from './box/box.reducer';
import { userReducer } from './user/user.reducer';

export const reducers = {
  boxes: boxesReducer,
  box: boxReducer,
  user: userReducer,
};
