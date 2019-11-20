import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/shared/services/blog.service';
import { IPost } from 'src/app/shared/interfaces/blog.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts: IPost[] = [];
  constructor(private BlogService: BlogService) { 
    this.getPagePosts();
   }

  ngOnInit() {
  }

  getPagePosts(): void{
    this.posts = this.BlogService.getPosts();
  }

}
