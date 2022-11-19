import { createSelector } from '@ngrx/store';
import { IAppStateModel } from '../app-state.model';

export const selectFeature = (state: IAppStateModel) => state.user;

export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading);

export const currentUserSelector = createSelector(selectFeature, (state) => state.user);

export const errorSelector = createSelector(selectFeature, (state) => state.error);
