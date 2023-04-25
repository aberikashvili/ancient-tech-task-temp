import { createReducer, on } from '@ngrx/store';

import * as UserActions from './user.actions';
import { UserModel } from '@app/models/user.model';
import { UserStateModel } from './user-state.model';

export const initialState: UserStateModel = {
  isLoading: false,
  user: {} as UserModel,
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.getCurrentUser, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(UserActions.getCurrentUserSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    user: action.user,
  })),
  on(UserActions.getCurrentUserFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);
