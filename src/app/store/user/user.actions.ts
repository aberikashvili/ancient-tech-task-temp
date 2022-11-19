import { createAction, props } from '@ngrx/store';
import { UserModel } from '@app/models/user.model';

export const getCurrentUser = createAction('[User] Get Current User');

export const getCurrentUserSuccess = createAction(
  '[User] Get Current User Success',
  props<{ user: UserModel }>()
);

export const getCurrentUserFailure = createAction(
  '[User] Get Current User Failure',
  props<{ error: string }>()
);
