import { Pipe, PipeTransform } from '@angular/core';
import {IPhone} from '../phone.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: IPhone[], search: string = ''): IPhone[] {
    if (!search.trim()) {
      return  users;
    }
    return users.filter(user => {
      if (user.firstName.toLowerCase().includes(search.toLowerCase()) ||
          user.lastName.toLowerCase().includes(search.toLowerCase()) ||
          user.phone.toLowerCase().includes(search.toLowerCase())) {
        return user;
      }
    });
  }

}
