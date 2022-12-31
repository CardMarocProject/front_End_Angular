import { getUser } from './../../state/user/user.actions';
import { selectUser, selectUserData } from './../../state/user/user.selectors';
import { select, Store } from '@ngrx/store';
import { AppState } from './../../state/app.states';
import { IUser } from 'src/app/models/interfaces/user.interface';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
@Component({
  selector: 'app-carte-professionnelle',
  templateUrl: './carte-professionnelle.component.html',
  styleUrls: ['./carte-professionnelle.component.css'],
  animations: [
    trigger('flipState', [
      state(
        'active',
        style({
          transform: 'rotateY(179deg)',
        })
      ),
      state(
        'inactive',
        style({
          transform: 'rotateY(0)',
        })
      ),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in')),
    ]),
  ],
})
export class CarteProfessionnelleComponent implements OnInit {
  getState$?: Observable<any>;
  getStatedata$?: Observable<any>;
  user?: IUser;
  data?: string;
  dbImage: any;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.getState$ = this.store.pipe(select(selectUser));
    this.getState$?.subscribe((user) => {
      this.user = user;
      this.dbImage =
        'data:' + user.image.type + ';base64,' + String(user.image.image);
    });
    this.getStatedata$ = this.store.pipe(select(selectUserData));
    this.getStatedata$?.subscribe((data) => {
      this.data = data as string;
    });
  }

  flip: string = 'inactive';

  toggleFlip() {
    this.flip = this.flip == 'inactive' ? 'active' : 'inactive';
  }

  print() {}
}
