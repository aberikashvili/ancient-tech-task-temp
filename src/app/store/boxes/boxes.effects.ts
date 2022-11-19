import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { ApiService } from '../../core/services/api.service';

import * as BoxesActions from './boxes.actions';

@Injectable()
export class BoxesEffects {
  getBoxes$ = createEffect(() =>
    this._actions$.pipe(
      ofType(BoxesActions.getBoxes),
      mergeMap(() => {
        return this._apiService.loadBoxes().pipe(
          map((boxes) => BoxesActions.getBoxesSuccess({ boxes })),
          catchError((error) => of(BoxesActions.getBoxesFailure({ error: error.message })))
        );
      })
    )
  );

  constructor(private _actions$: Actions, private _apiService: ApiService) {}
}
