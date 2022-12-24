import { UserService } from '../../service/user/user.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { UserActionTypes, addUserSuccess, addUserFailed } from './user.actions';

@Injectable()
export class UserEffects {
  constructor(
    private actions: Actions,
    private userService: UserService,
    private router: Router
  ) {}

  AddUsertEffect = createEffect(() =>
    this.actions.pipe(
      ofType(UserActionTypes.ADD),
      switchMap((action: any) => {
        console.log(action.user);
        return this.userService.save(action.user, action.user.img).pipe(
          map((data ) => addUserSuccess({ data })),
          catchError((err) => of(addUserFailed(err.message)))
        );
      })
    )
  );

  AddUserSuccessEffect$ = createEffect(
    () =>
      this.actions.pipe(
        ofType(UserActionTypes.ADD_SUCCESS),
        tap((data) => {
          console.log('wa zbi ');
          console.log(data);
          this.router.navigate(['/cartePro']);
        })
      ),
    { dispatch: false }
  );

  AddUserFailedEffect$ = createEffect(
    () =>
      this.actions.pipe(
        ofType(UserActionTypes.ADD_FAILED),
        tap((data) => {
          console.log(data);
        })
      ),
    { dispatch: false }
  );
}
