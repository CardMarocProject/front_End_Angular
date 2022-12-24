import { Byte } from '@angular/compiler/src/util';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/models/interfaces/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public save(user: IUser, image: File): Observable<string> {
    const formData: FormData = new FormData();
    formData.append(
      'user',
      new Blob([JSON.stringify(user)], {
        type: 'application/json',
      })
    );
    formData.append('image', image, image.name);

    return this.http.post(environment.host + 'api/v1/user', formData, {
      responseType: 'text',
    });
  }
}
