import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/shared/services/blog.service';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/shared/interfaces/blog.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  Post: IPost;
  PostID: number;
  constructor(
    private BlogService: BlogService,
    private route: ActivatedRoute,
    private location: Location
  ) { 
    this.getPost() 
  }

  ngOnInit() {
  }

  private getPost(): void{
    this.PostID = +Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.PostID);
    
    // this.BlogService.getDetailsJSON(this.PostID).subscribe(() =>{
    //   data => {
    //     this.Post = data;
    //     console.log(data);
        
    //   }
    // });
    this.BlogService.getDetailsJSON(this.PostID).subscribe(
      data => {
        this.Post = data;
      },
      err => {
        console.log(err);
      }
    )
  }

  goToBack(): void{
    this.location.back();
    console.log(this.Post);
    
  }

}
