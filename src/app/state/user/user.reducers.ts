import { IUser } from './../../models/interfaces/user.interface';
import { Action, createReducer, on } from '@ngrx/store';
import {
  addUser,
  addUserSuccess,
  addUserFailed,
  getUser,
  getUserSuccess,
  getUserFailed,
} from './user.actions';
import { Byte } from '@angular/compiler/src/util';

export interface UserState {
  data: string;
  user: IUser;
  errorMessage: string;
}

export const initialState: UserState = {
  data: '',
  errorMessage: '',
  user: {},
};

export const UserReducer = createReducer(
  initialState,
  on(addUser, (state: UserState, { user }) => {
    return {
      ...state,
      user,
    };
  }),
  on(addUserSuccess, (state: UserState, { data }) => {
    return {
      ...state,
      data: data.data,
      user: data.user,
    };
  }),
  on(addUserFailed, (state: UserState, { payload }) => {
    return {
      ...state,
      errorMessage: payload,
    };
  }),
  // reducer get user by cin
  on(getUser, (state: UserState, { cin }) => {
    return {
      ...state,
    };
  }),
  on(getUserSuccess, (state: UserState, { user }) => {
    return {
      ...state,
      user,
    };
  }),
  on(getUserFailed, (state: UserState, { payload }) => {
    return {
      ...state,
      errorMessage: payload,
    };
  })
);
