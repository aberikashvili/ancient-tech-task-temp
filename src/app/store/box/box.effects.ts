import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { ApiService } from '../../core/services/api.service';

import * as BoxActions from './box.actions';

@Injectable()
export class BoxEffects {
  getBoxes$ = createEffect(() =>
    this._actions$.pipe(
      ofType(BoxActions.openBox.type),
      mergeMap((payload: any) => {
        return this._apiService.openBox(payload.input).pipe(
          map((boxOpenings) => BoxActions.openBoxSuccess({ boxOpenings })),
          catchError((error) => of(BoxActions.openBoxFailure({ error: error.message })))
        );
      })
    )
  );

  constructor(private _actions$: Actions, private _apiService: ApiService) {}
}
