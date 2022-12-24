import { card } from '../enums/card-type.enum';
import { IImage } from './image.interface';

export interface IUser {
  id?: number;
  firstName?: string;
  arabiceFirstName?: string;
  lastName?: string;
  arabicLastName?: Date;
  cin?: string;
  profession?: string;
  birthdayDate?: string;
  type?: card;
  image?:IImage
  img?:File
}
