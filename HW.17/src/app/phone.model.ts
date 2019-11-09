import {IPhone} from './phone.interface';

class Phone implements IPhone {
  constructor(
      public id: number,
      public firstName: string,
      public lastName: string,
      public phone: string
  ) {}

}
