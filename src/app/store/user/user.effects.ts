import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { ApiService } from '../../core/services/api.service';

import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {
  getCurrentUser$ = createEffect(() =>
    this._actions$.pipe(
      ofType(UserActions.getCurrentUser),
      mergeMap(() => {
        return this._apiService.getCurrentUser().pipe(
          map((user) => UserActions.getCurrentUserSuccess({ user })),
          catchError((error) => of(UserActions.getCurrentUserFailure({ error: error.message })))
        );
      })
    )
  );

  constructor(private _actions$: Actions, private _apiService: ApiService) {}
}
