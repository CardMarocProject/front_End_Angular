import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/models/interfaces/user.interface';
import { IUserDao } from 'src/app/models/interfaces/userDao.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public save(user: IUser, image: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append(
      'user',
      new Blob([JSON.stringify(user)], {
        type: 'application/json',
      })
    );
    formData.append('image', image, image.name);
    console.log(environment.host + 'api/v1/user');
    return this.http.post<any>(environment.host + 'api/v1/user', formData);
  }
  // get user by cin
  public getUserByCin(cin: string): Observable<IUser> {
    return this.http.get<IUser>(environment.host + 'api/v1/user/' + cin);
  }
}
