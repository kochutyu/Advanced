import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {IUser} from '../interface/user.interface';
import {User} from '../model/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, IUser {
    thisUser: IUser = {id: 1, username: 'admin', password: 'admin', email: 'admin@gmail.com'};
    id: number;
    username: string;
    email: string;
    password: string;
    usernameSign: string = '';
    emailSign: string = 'admin@gmail.com';
    passwordSign: string = 'admin';
    CheckSignIn: boolean = true;
    wrongPasswordOrEmail: boolean;
    InputIsEmpty: boolean;
  repeatEmail: boolean;
  repeatUsername: boolean;
    users: IUser[] = [
      {id: 1, username: 'admin', password: 'admin', email: 'admin@gmail.com'}
    ];
  @ViewChild('signInClose', {static: false}) signInClose;
  @ViewChild('signUpClose', {static: false}) signUpClose;
  constructor() { }

  ngOnInit() {
  }

  signUp() {
    this.repeatEmail = false;
    this.repeatUsername = false;
    if (this.usernameSign !== '' && this.emailSign !== '' && this.passwordSign !== '') {
      const index = this.users.findIndex(i => this.usernameSign === i.username || this.emailSign === i.email);
      if (this.users[index] === undefined) {
        const user = new User(1, this.usernameSign, this.emailSign, this.passwordSign);
        this.users.push(user);
        console.log(this.users);
        this.signUpClose.nativeElement.click();
        this.usernameSign = this.emailSign = this.passwordSign = '';
      } else {
        if (this.users[index].email === this.emailSign) { this.repeatEmail = true; }
        if (this.users[index].username === this.usernameSign) { this.repeatUsername = true; }
      }
    } else {
      this.InputIsEmpty = true;
    }
  }

  signIn() {
    if (this.emailSign !== '' && this.passwordSign !== '') {
      const index = this.users.findIndex(i => this.passwordSign === i.password && this.emailSign === i.email);
      console.log(this.users[index]);
      if (this.users[index] !== undefined) {
        this.thisUser = this.users[index];
        this.CheckSignIn = true;
        this.wrongPasswordOrEmail = false;
        this.emailSign = this.passwordSign = '';
        this.signInClose.nativeElement.click();
      } else {
        this.wrongPasswordOrEmail = true;
        this.InputIsEmpty = false;
      }
    } else {
      this.wrongPasswordOrEmail = false;
      this.InputIsEmpty = true;
    }
  }
  signOut() {
    this.CheckSignIn = false;
  }
}
