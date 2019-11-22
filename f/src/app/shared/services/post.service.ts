import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IPost } from '../interfaces/post.interface';
@Injectable({
    providedIn: 'root'
})
export class PostService {
    private url: string;
    private posts: Array<IPost> = [];
    constructor(private http: HttpClient) {
      this.url = 'http://localhost:3000/blog';
    }
  
    getJsonProducts(): Observable<Array<IPost>> {
      return this.http.get<Array<IPost>>(this.url);
    }
  
    setJsonProducts(post: IPost): Observable<Array<IPost>> {
      return this.http.post<Array<IPost>>(this.url, post);
    }
  
    deleteJsonProducts(id: number): Observable<Array<IPost>> {
      return this.http.delete<Array<IPost>>(`${this.url}/${id}`);
    }
  
    updateJsonProducts(product: IPost): Observable<Array<IPost>> {
      return this.http.put<Array<IPost>>(`${this.url}/${product.id}`, product);
    }

    getPosts(): IPost[] {
      return this.posts;
    }
    setPosts(post: IPost): void {
      this.posts.push(post);
    }
    deletePost(post: IPost): void{
      this.posts = this.posts.filter( i => i.id !== post.id );
    }
    savePost(post: IPost): void {
      const index = this.posts.findIndex( i => i.id === post.id );
      this.posts.splice(index, 1, post);
    }
  }