import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IUser } from '../interface/user.interface';
import { User } from '../model/user.model';
import { IPost } from '../interface/post.interface';
import { Post } from '../model/post.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, IUser {
  thisUser: IUser;
  thisPost: IPost;

  id: number;
  username: string;
  email: string;
  password: string;

  ID: number = 1;
  UserID: number = 2;

  usernameSign: string = '';
  emailSign: string = '';
  passwordSign: string = '';
  textarea: string = '';
  title: string = '';

  CheckSignIn: boolean;
  wrongPasswordOrEmail: boolean;
  InputIsEmpty: boolean;
  repeatEmail: boolean;
  repeatUsername: boolean;
  checkEdit: boolean;
  checkUserDeletePost: boolean;

  users: IUser[] = [
    { id: 1, username: 'admin', password: 'admin', email: 'admin@gmail.com' },
    { id: 2, username: 'Imperator12340', password: '1', email: '1' }
  ];
  posts: IPost[] = [
    { id: 1, title: 'Email and password for admin', posted: 'admin', content: 'admin@gmail.com' },
  ];

  @ViewChild('signInClose', { static: false }) signInClose;
  @ViewChild('signUpClose', { static: false }) signUpClose;
  @ViewChild('addPostOpen', { static: false }) addPostOpen;
  @ViewChild('saveClose', { static: false }) saveClose;

  constructor() { }

  ngOnInit() {
  }

  signUp() {
    this.repeatEmail = false;
    this.repeatUsername = false;
    if (this.usernameSign !== '' && this.emailSign !== '' && this.passwordSign !== '') {
      const index = this.users.findIndex(i => this.usernameSign === i.username || this.emailSign === i.email);
      if (this.users[index] === undefined) {
        this.UserID += 1;
        const user = new User(this.UserID, this.usernameSign, this.emailSign, this.passwordSign);
        this.users.push(user);
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
      if (this.users[index] !== undefined) {
        this.thisUser = this.users[index];
        this.CheckSignIn = true;
        this.wrongPasswordOrEmail = false;
        this.posts.forEach(i => {
          if (this.thisUser.username === 'admin') {
            i.post = false;
          } else {
            i.posted !== this.thisUser.username ? i.post = true : i.post = false;
          }
        });
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
  edit(post: IPost) {
    this.checkEdit = true;
    this.thisPost = post;
    this.textarea = post.content;
    this.title = post.title;
    this.addPostOpen.nativeElement.click();
  }
  deletePost(post: IPost) {
    if (post.posted === this.thisUser.username || post.posted !== 'admin') {
      this.posts = this.posts.filter(i => post.id !== i.id);
    }
  }
  save() {
    this.thisPost.title = this.title;
    this.thisPost.content = this.textarea;
    this.checkEdit = false;
    this.title = this.textarea = '';
    this.saveClose.nativeElement.click();
  }
  addPost() {
    this.ID += 1;
    const post: IPost = new Post(this.ID, this.title, this.thisUser.username, this.textarea);
    this.posts.unshift(post);
    this.posts.forEach(i => {
      if (i.posted === this.thisUser.username || i.posted !== 'admin') {
        this.checkUserDeletePost = false;
      }
    });
    this.title = this.textarea = '';
    this.saveClose.nativeElement.click();
  }
}
