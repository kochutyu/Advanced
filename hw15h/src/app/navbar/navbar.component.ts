import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {IUser} from '../interface/user.interface';
import {User} from '../model/user.model';
import {IPost} from '../interface/post.interface';
import {Post} from '../model/post.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, IUser {
    thisUser: IUser =  {id: 1, username: 'admin', password: 'admin', email: 'admin@gmail.com'};
    thisPost: IPost;

    id: number;
    username: string;
    email: string;
    password: string;

    usernameSign: string = '';
    emailSign: string = 'admin@gmail.com';
    passwordSign: string = 'admin';
    textarea: string = '';
    title: string = '';

    CheckSignIn: boolean = true;
    wrongPasswordOrEmail: boolean;
    InputIsEmpty: boolean;
  repeatEmail: boolean;
  repeatUsername: boolean;
  checkEdit: boolean = false;
  checkUserDeletePost: boolean;
    users: IUser[] = [
      {id: 1, username: 'admin', password: 'admin', email: 'admin@gmail.com'}
    ];
  posts: IPost[] = [
    {id: 1, title: 'Angular 1', posted: 'admin', content: 'Lorem ipsum dolor sit amet.'},
    {id: 2, title: 'Angular 2', posted: 'admin', content: 'Lorem ipsum dolor sit amet.'},
    {id: 3, title: 'Angular 3', posted: 'admin', content: 'Lorem ipsum dolor sit amet.'},
    {id: 4, title: 'Angular 4', posted: 'admin', content: 'Lorem ipsum dolor sit amet.'}
  ];
  @ViewChild('signInClose', {static: false}) signInClose;
  @ViewChild('signUpClose', {static: false}) signUpClose;
  @ViewChild('addPostOpen', {static: false}) addPostOpen;
  @ViewChild('saveClose', {static: false}) saveClose;
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
        this.posts.forEach(i => {
          if (i.posted !== this.thisUser.username || i.posted !== 'admin') {
            this.checkUserDeletePost = true;
          }
        })
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
    const post: IPost = new Post(5, this.title, this.thisUser.username, this.textarea);
    this.posts.unshift(post);
    this.posts.forEach(i => {
      if (i.posted === this.thisUser.username || i.posted !== 'admin') {
        this.checkUserDeletePost = false;
      }
    })
    this.title = this.textarea = '';
    this.saveClose.nativeElement.click();
  }
}
