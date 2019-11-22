import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ICategory } from 'src/app/shared/interfaces/category.interface';
import { Category } from 'src/app/shared/classes/category.model';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit, ICategory {

  id: number;
  name: string;

  adminCategorys: ICategory[] = [];

  thisCategory: ICategory;
  searchName: string;

  editStatus: boolean;

  @ViewChild('close', {static: false}) close: ElementRef;
  @ViewChild('openModal', {static: false}) openModal: ElementRef;

  constructor(private CategoryService: CategoryService) { 
    this.getCategory();
  }

  ngOnInit() {
  }

  private getCategory(): void {
    this.CategoryService.getCategoryJSON().subscribe(
      data => {
        this.adminCategorys = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  private clearForm(): void{
    this.name = '';
  }

  public addCategory(): void{
    if (this.name.trim()) {
      const newCategory: ICategory = new Category(this.id, this.name);
      this.adminCategorys.length>0 ? newCategory.id = this.adminCategorys.slice(-1)[0].id + 1 : newCategory.id = 1;
      this.CategoryService.setCategoryJSON(newCategory).subscribe(()=>{
        this.getCategory();
      });
      this.clearForm();
      this.close.nativeElement.click();
    }
  }

  public deleteCategoy(category: Category): void{
    this.CategoryService.deleteCategoryJSON(category).subscribe(() => {
      this.getCategory();
    });
  }

  public editCategory(category: Category): void{
    this.name = category.name;
    this.thisCategory = category;
    this.editStatus = true;
    this.openModal.nativeElement.click();
  }

  public saveCategory(): void{    
    this.thisCategory.name = this.name;
    this.editStatus = false;
    this.CategoryService.updateCategoryJSON(this.thisCategory).subscribe(()=>{
      this.getCategory();
    });
    this.clearForm();
    this.close.nativeElement.click();
  }

  private closeModal() {
    this.editStatus = false;
    this.clearForm();
  }

}
