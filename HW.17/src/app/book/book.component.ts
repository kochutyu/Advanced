import {Component, OnInit, ViewChild} from '@angular/core';
import {IPhone} from '../phone.interface';
import {Phone} from '../phone.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, IPhone {
  firstName: string;
  id: number = 3;
  lastName: string;
  phone: string;

  firstNameInput: string;
  lastNameInput: string;
  numberInput: string;
  editCheck: boolean = false;
  thisUSER: IPhone;
  users: IPhone[] = [
    {id: 1, firstName: 'Yura', lastName: 'Kochut', phone: '0975030847'},
    {id: 2, firstName: 'Adolf', lastName: 'Hitler', phone: '0945632986'},
    {id: 3, firstName: 'Joseph', lastName: 'Stalin', phone: '0635623496'}
  ]
  @ViewChild('modalClose', {static: false}) modalClose;
  @ViewChild('modalCHECK', {static: false}) modalCHECK;
  constructor() { }

  ngOnInit() {
  }
  edit(user: IPhone) {
    this.thisUSER = user;
    this.editCheck = true;
    this.firstNameInput = this.thisUSER.firstName;
    this.lastNameInput = this.thisUSER.lastName;
    this.numberInput = this.thisUSER.phone;
    this.modalCHECK.nativeElement.click();
  }
  delete(user: IPhone) {
    this.users = this.users.filter(i => i.id !== user.id);
  }
  addNumber() {
    this.id += 1;
    if (this.firstNameInput.trim() && this.lastNameInput.trim() &&  this.numberInput.trim()) {
      const user = new Phone(this.id, this.firstNameInput, this.lastNameInput, this.numberInput);
      this.users.unshift(user);
      this.firstNameInput = this.lastNameInput = this.numberInput = '';
      this.modalClose.nativeElement.click();
    }
  }
  save() {
    this.thisUSER.firstName = this.firstNameInput;
    this.thisUSER.lastName = this.lastNameInput;
    this.thisUSER.phone = this.numberInput;
    this.editCheck = false;
    this.modalClose.nativeElement.click();
  }
}
