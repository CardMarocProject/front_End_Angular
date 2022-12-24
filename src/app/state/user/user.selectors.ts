import { createSelector } from '@ngrx/store';
import { AppState } from '../app.states';
import { UserState } from './user.reducers';

export const selectUsers = (state: AppState) => state.user;

export const selectUser = createSelector(
  selectUsers,
  (state: UserState) => state.user
);

export const selectUserData = createSelector(
  selectUsers,
  (state: UserState) => state.data
);
