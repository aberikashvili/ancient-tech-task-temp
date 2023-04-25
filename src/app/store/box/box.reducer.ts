import { createReducer, on } from '@ngrx/store';
import { BoxModel } from '@app/models/box.model';

import { BoxStateModel } from './box-state.model';
import * as BoxActions from './box.actions';

export const initialState: BoxStateModel = {
  isOpening: false,
  box: {} as BoxModel,
  boxOpenings: [],
  error: null,
};

export const boxReducer = createReducer(
  initialState,
  on(BoxActions.openBox, (state) => ({
    ...state,
    isOpening: true,
  })),
  on(BoxActions.openBoxSuccess, (state, action) => ({
    ...state,
    isOpening: false,
    boxOpenings: action.boxOpenings,
  })),
  on(BoxActions.openBoxFailure, (state, action) => ({
    ...state,
    isOpening: false,
    error: action.error,
  }))
);
