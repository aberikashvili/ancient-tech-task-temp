import { createReducer, on } from '@ngrx/store';

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
  })),
  on(BoxesActions.getBoxesSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    boxes: action.boxes,
  })),
  on(BoxesActions.getBoxesFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);
