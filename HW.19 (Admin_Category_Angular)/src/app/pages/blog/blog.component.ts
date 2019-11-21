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
    this.getPOST();
   }

  ngOnInit() {
  }

  private getPOST(): void{
    this.BlogService.getPostJSON().subscribe(
      data => {
        this.posts = data
      }
    );
  }

}
