import { Component, OnInit } from '@angular/core';
import { IUser } from '../user.interface';
import { User } from '../user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  arrUsers: Array<IUser> = [];
  userId: number;
  userLogin: string;
  userPassword: string;
  userEmail: string;
  editStatus: boolean = false;
  btnStatus: boolean = false;
  addSave: string = 'Add user';

  constructor() { }

  ngOnInit() {
  }

  addUser(): void {
    const newUser: IUser = new User(1, this.userLogin, this.userPassword, this.userEmail);
    if (this.arrUsers.length > 0) {
      newUser.id = this.arrUsers.slice(-1)[0].id + 1;
    }
    if (this.editStatus) {
      newUser.id = this.userId;
      const index = this.arrUsers.findIndex(us => us.id === newUser.id);
      this.addSave = 'Add user';
      this.arrUsers.splice(index, 1, newUser);
      this.editStatus = false;
    }
    else {
      this.arrUsers.push(newUser);
    }
    console.log('newUser', newUser);
    console.log('arrUsers', this.arrUsers);
    this.userEmail = '';
    this.userPassword = '';
    this.userLogin = '';
  }

  deleteUser(user: IUser): void {
    const index = this.arrUsers.findIndex(us => us.id === user.id);
    this.arrUsers.splice(index, 1);
  }

  editUser(user: IUser): void {
    this.addSave = 'Save edit user';
    this.userLogin = user.login;
    this.userPassword = user.password;
    this.userEmail = user.email;
    this.userId = user.id;
    this.editStatus = true;
  }

}
