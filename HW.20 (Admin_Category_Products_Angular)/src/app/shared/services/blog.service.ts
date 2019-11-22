import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/blog.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private url: string;

  public posts: IPost[] = [];
  
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/posts';
  }

  getPostJSON(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.url);
  }

  setPostJSON(post: IPost) :Observable<IPost[]> {
    return this.http.post<IPost[]>(this.url, post)
  }

  deleteJsonProducts(post: IPost): Observable<Array<IPost>> {
    return this.http.delete<Array<IPost>>(`${this.url}/${post.id}`);
  }

  updateJsonPost(post: IPost): Observable<Array<IPost>> {
    return this.http.put<Array<IPost>>(`${this.url}/${post.id}`, post);
  }

  getDetailsJSON(id: number): Observable<IPost> {
    return this.http.get<IPost>(`${this.url}/${id}`);
  }

  getPosts(): IPost[]{
    return this.posts;
  }

  setPosts(post: IPost): void{
    this.posts.push(post);
  }

  deletePost(post: IPost): void{
    this.posts = this.posts.filter( i => i.id !== post.id);
  }

  updatePosts(post: IPost): void {
    const index = this.posts.findIndex( i => i.id === post.id);
    this.posts.splice(index, 1, post);
  }

}
