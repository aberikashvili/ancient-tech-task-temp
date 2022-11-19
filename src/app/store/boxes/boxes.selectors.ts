import { createSelector } from '@ngrx/store';
import { IAppStateModel } from '../app-state.model';

export const selectFeature = (state: IAppStateModel) => state.boxes;

export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading);

export const boxesSelector = createSelector(selectFeature, (state) => state.boxes);

export const errorSelector = createSelector(selectFeature, (state) => state.error);

export const boxByIdSelector = (id: string) =>
  createSelector(selectFeature, (state) => state.boxes.find((box) => box.id === id));
