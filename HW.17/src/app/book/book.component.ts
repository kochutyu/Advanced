import { Component, OnInit } from '@angular/core';
import {IPhone} from '../phone.interface';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, IPhone {
  firstName: string;
  id: number;
  lastName: string;
  phone: string;
  users: IPhone[] = [
    {id: 1, firstName: 'Yura', lastName: 'Kochut', phone: '0975030847'},
    {id: 2, firstName: 'Adolf', lastName: 'Hitler', phone: '0945632986'},
    {id: 3, firstName: 'Joseph', lastName: 'Stalin', phone: '0635623496'},
  ]
  constructor() { }

  ngOnInit() {
  }
  // edit(user: IPhone) {
  //
  // }
  delete(user: IPhone) {
    this.users = this.users.filter(i => i.id !== user.id);
  }

}
