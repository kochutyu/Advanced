import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategory } from '../interfaces/category.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url: string;
  public categorys: ICategory[] = [];
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/category';
  }

  getCategoryJSON(): Observable<ICategory[]>{
    return this.http.get<ICategory[]>(this.url);
  }

  setCategoryJSON(category: ICategory): Observable<ICategory[]>{
    return this.http.post<ICategory[]>(this.url, category);
  }

  deleteCategoryJSON(category: ICategory): Observable<ICategory[]>{
    return this.http.delete<ICategory[]>(`${this.url}/${category.id}`);
  }

  updateCategoryJSON(category: ICategory): Observable<ICategory[]>{
    return this.http.put<ICategory[]>(`${this.url}/${category.id}`, category);
  }

  getCategory(): ICategory[]{
    return this.categorys;
  }

  setCategory(category: ICategory): void{
    this.categorys.push(category);
  }

  deleteCategory(category: ICategory): void{
    const index = this.categorys.findIndex( i => i.id === category.id);
    this.categorys.splice(index, 1);
  }

  updateCategory(category: ICategory): void{
    const index = this.categorys.findIndex( i => i.id === category.id);
    this.categorys.splice(index, 1, category)
  }

}
