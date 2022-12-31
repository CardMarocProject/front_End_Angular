import { Byte } from '@angular/compiler/src/util';
import { IUser } from './../../models/interfaces/user.interface';
import { Action, createAction, props } from '@ngrx/store';

export enum UserActionTypes {
  ADD = '[User] ADD User',
  ADD_SUCCESS = '[User] ADD User Success',
  ADD_FAILED = '[User] ADD User FAILED',
  GET = '[User] GET User',
  GET_SUCCESS = '[User] GET User Success',
  GET_FAILED = '[User] GET User FAILED',
}

export const addUser = createAction(
  UserActionTypes.ADD,
  props<{ user: IUser }>()
);

export const addUserSuccess = createAction(
  UserActionTypes.ADD_SUCCESS,
  props<{ data: any }>()
);

export const addUserFailed = createAction(
  UserActionTypes.ADD_FAILED,
  props<{ payload: any }>()
);

export const getUser = createAction(
  UserActionTypes.GET,
  props<{ cin: string }>()
);

export const getUserSuccess = createAction(
  UserActionTypes.GET_SUCCESS,
  props<{ user: IUser }>()
);

export const getUserFailed = createAction(
  UserActionTypes.GET_FAILED,
  props<{ payload: any }>()
);
