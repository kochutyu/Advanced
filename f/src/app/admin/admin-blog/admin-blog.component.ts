import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces/post.interface';
import { Post } from 'src/app/shared/classes/post.model';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css']
})
export class AdminBlogComponent implements OnInit, IPost {
  id: number = -1;
  title: string;
  text: string;
  author: string;
  date: Date = new Date;
  checkEdit: boolean;
  thisPost: IPost;
  posts: IPost[] = [];

  constructor() { }

  ngOnInit() {
  }

  addPost(){
    this.id += 1;
    const post: IPost = new Post(this.id, this.title, this.text, this.author, this.date);
    this.posts.push(post);
    this.title = this.text = this.author = '';
  }
  editPost(post: IPost): void{
    this.thisPost = post;
    this.title = post.title;
    this.text = post.text;
    this.author = post.author;
    this.checkEdit = true;
  }
  deletePost(post: IPost): void{
    this.posts = this.posts.filter( i => i.id !== post.id );
  }
  savePost(): void {
    this.thisPost.title = this.title;
    this.thisPost.text = this.text;
    this.thisPost.author = this.author;
    this.title = this.text = this.author = '';
    this.checkEdit = false;
  }
  
}
