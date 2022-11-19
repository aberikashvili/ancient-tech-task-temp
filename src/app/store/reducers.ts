import { boxesReducer } from './boxes/boxes.reducer';
import { boxReducer } from './box/box.reducer';

export const reducers = {
  boxes: boxesReducer,
  box: boxReducer,
};
