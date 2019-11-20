import { Component, OnInit, ViewChild } from '@angular/core';
import { BlogService } from 'src/app/shared/services/blog.service';
import { Post } from 'src/app/shared/classes/post.model';
import { IPost } from 'src/app/shared/interfaces/blog.interface';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css']
})
export class AdminBlogComponent implements OnInit, IPost {

  userID: number = 1;

  id: number;
  title: string;
  text: string;
  author: string;
  date?: Date = new Date();
  
  postsConponent: IPost[] = [];

  constructor(private BlogService: BlogService) {
    this.getPost();
  }

  ngOnInit() {
  }

  private getPost(): void {
    this.BlogService.getPostJSON().subscribe(
      data => {
        this.BlogService.posts = data
      },
      err => {
        console.log(err);
      }
    );
  }

  addPost() {
    if (this.title.trim() && this.text.trim() && this.author.trim()) {
    const newUser: IPost = new Post(1, this.title, this.text, this.author, this.date);
    this.BlogService.posts.length > 0 ? newUser.id = this.BlogService.posts.slice(-1)[0].id + 1 : 1;

    console.log(newUser);

    this.BlogService.setPostJSON(newUser).subscribe(() => {
      this.getPost();
    });
    this.clearForm();
    }
  }
  editPost(post: IPost): void {

  }
  deletePost(post: IPost): void {
    this.BlogService.deleteJsonProducts(post).subscribe(() => {
      this.getPost();
    });
  }

  clearForm(): void {
    this.title = '';
    this.text = '';
    this.author = '';
  }
}
