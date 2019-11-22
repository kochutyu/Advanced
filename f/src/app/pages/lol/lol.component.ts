import { Component, OnInit } from '@angular/core';
interface IUser{
  id: number;
  name: string;
}

@Component({
  selector: 'app-lol',
  templateUrl: './lol.component.html',
  styleUrls: ['./lol.component.css']
})
export class LolComponent implements OnInit, IUser {
  id: number;
  name: string;
  check: boolean = false;
  arr: Array<number> = [1,2,3];
  users: Array<IUser> = [
    {id: 1, name: 'Mike'},
    {id: 2, name: 'Mik'},
    {id: 3, name: 'Yra'}
  ]
  number1: number[] = [1,2,3,4,5];
  number2: number[] = [1,2,3,4,5];

  constructor() { }

  ngOnInit() {
  }

  clock(): void{
    this.check = !this.check;
    let check: number = 1;
    console.log(check);
    console.log(this.check);
    console.log(this.arr.filter(i => i>2));
    
    // for (let i = 0; i < this.number1.length; i++) {
    //   for (let j = 0; j < this.number2.length; j++) {
    //     i===j ? console.log(i) : null;
    //   }
    // }
    // this.number1.forEach(function(i){
    //   this.number2.forEach(function(j){
    //     i===j ? console.log(i) : null;
    //   })
    // })
    this.number1.forEach(i => {
      this.number2.forEach(j => {
        i===j ? console.log(i) : null;
      })
    })
  }


}
