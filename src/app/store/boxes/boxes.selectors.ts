import { createSelector } from '@ngrx/store';
import { IAppStateModel } from '../app-state.model';
import { BoxesStateModel } from './boxes-state.model';

export const selectFeature = (state: IAppStateModel) => state.boxes;

export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading);

export const boxesSelector = createSelector(selectFeature, (state) => state.boxes);

export const errorSelector = createSelector(selectFeature, (state) => state.error);
