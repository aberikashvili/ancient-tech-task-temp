import { createSelector } from '@ngrx/store';
import { IAppStateModel } from '../app-state.model';

export const selectFeature = (state: IAppStateModel) => state.box;

export const isOpeningSelector = createSelector(selectFeature, (state) => state.isOpening);

export const boxOpeningsSelector = createSelector(selectFeature, (state) => state.boxOpenings);

export const errorSelector = createSelector(selectFeature, (state) => state.error);
