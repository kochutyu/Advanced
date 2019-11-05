import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  emailSignIn: string = '';
  passwordSignIn: string = '';
  constructor() { }

  ngOnInit() {
  }
  signIn() {
    if (this.emailSignIn !== '' && this.passwordSignIn !== '') {
      alert('trim');
      this.emailSignIn = this.passwordSignIn = '';
    }
  }
  // signUp(){}
}
