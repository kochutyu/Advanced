import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  regForm: any = {
    userFirstName: '',
    userSecondName: '',
    userEmail: ''
  }

  registerForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  setData(): void {
    console.log(this.regForm);
  }

  private createForm(): void{
    this.registerForm = new FormGroup({
      userFirstName: new FormControl(null),
      userSecondName: new FormControl(null),
      userEmail: new FormControl(null),
    });
  }
  
  /*
  
  ng-untouched
  ng-touched
  ng-dirty // зміна input поля
  ng-pristine // клікали на інпут, але дані не змінювалися
  ng-invalid 

  required

  pattern

  
  */
}
