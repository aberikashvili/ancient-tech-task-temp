import { createAction, props } from '@ngrx/store';
import { OpenBoxInputModel } from '@app/models/open-box-input.model';
import { BoxOpeningModel } from '@app/models/box-opening.model';

export const openBox = createAction('[Box] Open Box', props<{ input: OpenBoxInputModel }>());

export const openBoxSuccess = createAction(
  '[Box] Open Box Success',
  props<{ boxOpenings: BoxOpeningModel[] }>()
);

export const openBoxFailure = createAction('[Box] Open Box Failure', props<{ error: string }>());
