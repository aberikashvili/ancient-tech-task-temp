import { createAction, props } from '@ngrx/store';
import { BoxModel } from '@app/models/box.model';

export const getBoxes = createAction('[Boxes] Get Boxes');

export const getBoxesSuccess = createAction(
  '[Boxes] Get Boxes Success',
  props<{ boxes: BoxModel[] }>()
);

export const getBoxesFailure = createAction(
  '[Boxes] Get Boxes Failure',
  props<{ error: string }>()
);
