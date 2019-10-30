import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// @Component({
//   selector: 'app-root',
//   template: '<h1>Hello Angular</h1>',
//   styles: ['h1{color:blue}']
// })
export class AppComponent {
  title: string = 'First step';
  url: string = 'https://angular.io';
  urlName: string = 'Angular';
  message: string;
  myName: string = 'Ivan';
  mes: string;
  // ----------------------
  text: string;
  allText: string = '';
  error: string;
  isError: boolean;
  errorStyle: string;
  errorMessage: string = 'text here..';
  showMessage(): string {
    return 'New message';
  }

  addMessage(): void {
    this.message = 'Opacha';
  }

  showName(name: string): void {
    this.mes = name;
  }

  addText(): void {
    if (this.text) {
      this.allText += this.text + ' ';
      this.text = '';
      // this.error = '';
      this.errorStyle = '';
      this.isError = false;
      this.errorMessage = 'text here..';
    } else {
      // this.error = 'error';
      this.errorStyle = 'red';
      this.isError = true;
      this.errorMessage = 'Input is empty';
    }
  }

  // checking(){
  //   // const arr1 = [1,2,3];
  //   // const arr2 = [3,4,5];
  //   // const some = arr1.map(ar => {})
  //   // this.text = some
  // }
  showDetails(event): void{
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.value);
    console.log(event.keyCode);
  }
}
