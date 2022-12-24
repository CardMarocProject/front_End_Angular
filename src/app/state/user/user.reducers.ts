import { IUser } from './../../models/interfaces/user.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { addUser, addUserSuccess, addUserFailed } from './user.actions';
import { Byte } from '@angular/compiler/src/util';

export interface UserState {
  data: string;
  user: IUser;
  errorMessage: string;
}

export const initialState: UserState = {
  data: '',
  errorMessage: '',
  user: {
    firstName: 'me',
  },
};

export const UserReducer = createReducer(
  initialState,
  on(addUser, (state: UserState, { user }) => {
    return {
      ...state,
      user,
    };
  }),
  on(addUserSuccess, (state: UserState, { data,   }) => {
    return {
      ...state,
     
      data,
    };
  }),
  on(addUserFailed, (state: UserState, { payload }) => {
    return {
      ...state,
      errorMessage: payload,
    };
  })
);
