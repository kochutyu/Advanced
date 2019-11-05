import { Component, Input } from '@angular/core';
export interface IPost {
  id: number;
  title: string;
  posted: string;
  content: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: IPost[] = [
    {id: 4, title: 'Angular', posted: 'Admin', content: 'lol'}
  ];
}
