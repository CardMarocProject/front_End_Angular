import { getUser } from './../../state/user/user.actions';
import { UserService } from './../../service/user/user.service';
import { Store } from '@ngrx/store';
import { IUser } from './../../models/interfaces/user.interface';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { addUser } from 'src/app/state/user/user.actions';

@Component({
  selector: 'app-inforamation-form',
  templateUrl: './inforamation-form.component.html',
  styleUrls: ['./inforamation-form.component.css'],
})
export class InforamationFormComponent implements OnInit {
  profile_picture: any = 'http://i.pravatar.cc/500?img=7';
  model: any = {};
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
    if (this.user != undefined) {
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
    if (this.user != undefined && this.user.img != undefined) {
      this.store.dispatch(addUser({ user: this.user }));
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

  fileChange(event: any) {
    if (event.target.files) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.profile_picture = reader.result;
      };
      this.addPictures(event);
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
