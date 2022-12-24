import { UserService } from './../../service/user/user.service';
import { addUser } from './../../state/user/user.actions';
import { IUser } from './../../models/interfaces/user.interface';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Store } from '@ngrx/store';
@Component({
  selector: 'app-form-body',
  templateUrl: './form-body.component.html',
  styleUrls: ['./form-body.component.css'],
})
export class FormBodyComponent implements OnInit {
  user: IUser = {};
  postResponse: any;
  successResponse?: string;

  userCreationForm: FormGroup = new FormGroup({
    nom: new FormControl(),
    prenom: new FormControl(),
    profession: new FormControl(),
    cin: new FormControl(),
    nom_arabic: new FormControl(),
    prenom_arabic: new FormControl(),
    cart_type: new FormControl(),
    birthday_date: new FormControl(),
  });

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<any>,
    public userservice: UserService
  ) {}

  ngOnInit(): void {
    this.userCreationForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      profession: ['', Validators.required],
      cin: ['', Validators.required],
      nom_arabic: ['', Validators.required],
      prenom_arabic: ['', Validators.required],
      birthday_date: ['', Validators.required],
    });
  }
  prepareuser() {
    console.log('outside zabi');
    if (this.user != undefined) {
      console.log('wtf inside ');
      this.user.firstName = this.userCreationForm.get('nom')?.value;
      this.user.lastName = this.userCreationForm.get('prenom')?.value;
      this.user.profession = this.userCreationForm.get('profession')?.value;
      this.user.arabiceFirstName =
        this.userCreationForm.get('nom_arabic')?.value;
      this.user.arabicLastName =
        this.userCreationForm.get('prenom_arabic')?.value;
      this.user.birthdayDate =
        this.userCreationForm.get('birthday_date')?.value;
      this.user.cin = this.userCreationForm.get('cin')?.value;
    }
  }
  createUser() {
    this.prepareuser();
    console.log(this.user);
    if (this.user != undefined && this.user.img != undefined) {
      this.store.dispatch(addUser({ user: this.user }));

      // this.userservice.save(this.user, this.user.img).subscribe((response) => {
      //   if (response.status === 200) {
      //     console.log(response);
      //     this.postResponse = response;
      //     this.successResponse = this.postResponse.body;
      //     console.log(this.postResponse.body);
      //   } else {
      //     console.log(response);
      //     this.successResponse = ' some error!';
      //   }
      // });
    }
  }

  addPictures(val: any) {
    console.log('damn fuck');
    console.log(val.target.files[0]);
    if (this.user != undefined) {
      this.user.img = val.target.files[0] as File;
      console.log(this.user.img);
    }
  }
  writeNameUser() {}
  writeLastNameUser() {}
  writeBirthdayUser() {}
  writeProfessionUser() {}
  writeCinUser() {}
  writeArabicLNameUser() {}
  writeArabicfNameUser() {}
}
