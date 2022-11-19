import { createReducer, on } from '@ngrx/store';
import { BoxModel } from './box.model';

import { BoxesStateModel } from './boxes-state.model';
import * as BoxesActions from './boxes.actions';

export const initialState: BoxesStateModel = {
  isLoading: false,
  boxes: [],
  error: null,
};

export const boxesReducer = createReducer(
  initialState,
  on(BoxesActions.getBoxes, (state) => ({
    ...state,
    isLoading: true,
    boxes: [{ name: 'Arkadi' } as BoxModel],
  }))
);
